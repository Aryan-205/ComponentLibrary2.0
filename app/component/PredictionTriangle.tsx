"use client";
// PredictionConeMenu.tsx
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  MouseEvent,
} from "react";

interface MenuItem {
  type: "item" | "submenu" | "separator";
  label?: string;
  shortcut?: string;
  danger?: boolean;
  children?: string[];
}

const MENU_ITEMS: MenuItem[] = [
  { type: "item", label: "New File", shortcut: "⌘N" },
  { type: "item", label: "Open Project", shortcut: "⌘O" },
  {
    type: "submenu",
    label: "Share",
    children: ["Copy Link", "Email", "Message", "Export"],
  },
  {
    type: "submenu",
    label: "Move to",
    children: ["Folder A", "Folder B", "Folder C"],
  },
  { type: "item", label: "Rename", shortcut: "⌘R" },
  { type: "separator" },
  { type: "item", label: "Delete", shortcut: "⌫", danger: true },
];

type Point = { x: number; y: number } | null;

function isPointInTriangle(
  px: number,
  py: number,
  ax: number,
  ay: number,
  bx: number,
  by: number,
  cx: number,
  cy: number
): boolean {
  const v0x = cx - ax;
  const v0y = cy - ay;
  const v1x = bx - ax;
  const v1y = by - ay;
  const v2x = px - ax;
  const v2y = py - ay;

  const dot00 = v0x * v0x + v0y * v0y;
  const dot01 = v0x * v1x + v0y * v1y;
  const dot02 = v0x * v2x + v0y * v2y;
  const dot11 = v1x * v1x + v1y * v1y;
  const dot12 = v1x * v2x + v1y * v2y;

  const denom = dot00 * dot11 - dot01 * dot01;
  if (denom === 0) return false;

  const invDenom = 1 / denom;
  const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
  const v = (dot00 * dot12 - dot01 * dot02) * invDenom;

  return u >= 0 && v >= 0 && u + v < 1;
}

function useMouseTracking() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
    delayedX: 0,
    delayedY: 0,
  });
  const history = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMove = (e: MouseEvent | MouseEventInit | any) => {
      const newPos = { x: e.clientX, y: e.clientY };
      history.current.push(newPos);
      if (history.current.length > 5) {
        history.current.shift();
      }
      const delayed = history.current[0] || newPos;
      setMouse({
        x: newPos.x,
        y: newPos.y,
        delayedX: delayed.x,
        delayedY: delayed.y,
      });
    };

    const listener = (e: globalThis.MouseEvent) => handleMove(e);
    window.addEventListener("mousemove", listener);
    return () => window.removeEventListener("mousemove", listener);
  }, []);

  return mouse;
}

interface MouseSafeAreaProps {
  mouseX: number;
  mouseY: number;
  subMenuRect: DOMRect | null;
  debug: boolean;
}

const MouseSafeArea: React.FC<MouseSafeAreaProps> = ({
  mouseX,
  mouseY,
  subMenuRect,
  debug,
}) => {
  if (!debug || !subMenuRect) return null;

  const BUFFER = 30;
  const ax = mouseX;
  const ay = mouseY;
  const bx = subMenuRect.left;
  const by = subMenuRect.top - BUFFER;
  const cx = subMenuRect.left;
  const cy = subMenuRect.bottom + BUFFER;

  const minX = Math.min(ax, bx, cx) - 10;
  const maxX = Math.max(ax, bx, cx) + 10;
  const minY = Math.min(ay, by, cy) - 10;
  const maxY = Math.max(ay, by, cy) + 10;

  const width = maxX - minX;
  const height = maxY - minY;

  const tAx = ax - minX;
  const tAy = ay - minY;
  const tBx = bx - minX;
  const tBy = by - minY;
  const tCx = cx - minX;
  const tCy = cy - minY;

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <svg
        width={width}
        height={height}
        style={{ position: "absolute", left: minX, top: minY }}
      >
        <polygon
          points={`${tAx},${tAy} ${tBx},${tBy} ${tCx},${tCy}`}
          fill="rgba(0, 150, 255, 0.15)"
          stroke="rgba(0, 150, 255, 0.8)"
          strokeWidth={1}
        />
      </svg>
    </div>
  );
};

export const PredictionConeMenu: React.FC = () => {
  const [openLabel, setOpenLabel] = useState<string | null>("Share");
  const [activeItemTop, setActiveItemTop] = useState(0);
  const [subMenuRect, setSubMenuRect] = useState<DOMRect | null>(null);
  const [debug, setDebug] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const subMenuRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const mouse = useMouseTracking();

  useEffect(() => {
    if (subMenuRef.current) {
      setSubMenuRect(subMenuRef.current.getBoundingClientRect());
    } else {
      setSubMenuRect(null);
    }
  }, [openLabel]);

  const isInsideSafe = useMemo(() => {
    if (!openLabel || !subMenuRect) return false;

    const BUFFER = 30;
    const dist = Math.hypot(
      mouse.x - mouse.delayedX,
      mouse.y - mouse.delayedY
    );
    if (dist < 3) return false;

    return isPointInTriangle(
      mouse.x,
      mouse.y,
      mouse.delayedX,
      mouse.delayedY,
      subMenuRect.left,
      subMenuRect.top - BUFFER,
      subMenuRect.left,
      subMenuRect.bottom + BUFFER
    );
  }, [mouse, subMenuRect, openLabel]);

  const handleMouseEnterItem = useCallback(
    (e: MouseEvent<HTMLButtonElement>, item: MenuItem) => {
      if (isInsideSafe) return;

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (item.type === "submenu" && item.label) {
        setOpenLabel(item.label);
        setActiveItemTop(e.currentTarget.offsetTop);
      } else {
        setOpenLabel(null);
      }
    },
    [isInsideSafe]
  );

  const handleMouseLeaveMenu = useCallback(() => {
    timeoutRef.current = window.setTimeout(() => {
      setOpenLabel(null);
    }, 150);
  }, []);

  const handleEnterSubMenu = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const currentSubmenuChildren =
    MENU_ITEMS.find((i) => i.type === "submenu" && i.label === openLabel)
      ?.children || [];

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: 40,
        display: "flex",
        gap: 32,
        alignItems: "flex-center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <label style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
            <input
              type="checkbox"
              checked={debug}
              onChange={(e) => setDebug(e.target.checked)}
            />
            Debug View
          </label>
        </div>

        <div
          ref={menuRef}
          onMouseLeave={handleMouseLeaveMenu}
          style={{
            position: "relative",
            display: "inline-block",
            borderRadius: 8,
            border: "1px solid #e2e2e2",
            background: "#fff",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            minWidth: 220,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {MENU_ITEMS.map((item, idx) => {
              if (item.type === "separator") {
                return (
                  <div
                    key={`sep-${idx}`}
                    style={{
                      height: 1,
                      background: "#f0f0f0",
                      margin: "4px 0",
                    }}
                  />
                );
              }

              const isOpenSubmenu =
                item.type === "submenu" && item.label === openLabel;

              return (
                <button
                  key={item.label ?? idx}
                  type="button"
                  onMouseEnter={(e) => handleMouseEnterItem(e, item)}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 10px",
                    paddingRight: item.type === "submenu" ? 6 : 10,
                    fontSize: 13,
                    color: item.danger ? "#d32f2f" : "#111",
                    background: isOpenSubmenu
                      ? "rgba(0,0,0,0.04)"
                      : "transparent",
                  }}
                >
                  <span>{item.label}</span>
                  <span
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      color: "#888",
                      fontSize: 11,
                    }}
                  >
                    {item.shortcut && <span>{item.shortcut}</span>}
                    {item.type === "submenu" && <span>›</span>}
                  </span>
                </button>
              );
            })}
          </div>

          {openLabel && (
            <div
              ref={subMenuRef}
              onMouseEnter={handleEnterSubMenu}
              style={{
                position: "absolute",
                left: "100%",
                marginLeft: 4,
                top: 0,
                transform: `translateY(${activeItemTop}px)`,
                borderRadius: 8,
                border: "1px solid #e2e2e2",
                background: "#fff",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                minWidth: 180,
                padding: "4px 0",
                zIndex: 10,
              }}
            >
              {currentSubmenuChildren.map((label) => (
                <div
                  key={label}
                  style={{
                    padding: "6px 10px",
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                  className="hover:bg-gray-100"
                >
                  {label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <MouseSafeArea
        mouseX={mouse.delayedX}
        mouseY={mouse.delayedY}
        subMenuRect={subMenuRect}
        debug={debug}
      />
    </div>
  );
};
