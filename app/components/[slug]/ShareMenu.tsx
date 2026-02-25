"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

type ShareMenuProps = {
  sourceCode: string;
  pageUrl?: string;
};

export default function ShareMenu({ sourceCode, pageUrl }: ShareMenuProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const url = pageUrl ?? (typeof window !== "undefined" ? window.location.href : "");

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  const handleCopyLink = () => copy(url, "link");
  const handleCopyCode = () => copy(sourceCode, "code");
  const handleEmail = () => {
    const subject = encodeURIComponent("Component link");
    const body = encodeURIComponent(`Check out this component:\n${url}`);
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
  };
  const handlePublish = () => copy(url, "link");

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 font-medium"
      >
        Share
        <ChevronRight
          className={`w-4 h-4 transition-transform ${open ? "rotate-90" : ""}`}
        />
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 z-20 min-w-[180px] rounded-xl border border-neutral-200 bg-white shadow-lg py-1">
            <button
              type="button"
              onClick={() => {
                handleCopyLink();
              }}
              className="w-full px-4 py-2.5 text-left text-sm hover:bg-neutral-50 text-neutral-700"
            >
              {copied === "link" ? "Copied!" : "Copy Link"}
            </button>
            <button
              type="button"
              onClick={() => {
                handleCopyCode();
              }}
              className="w-full px-4 py-2.5 text-left text-sm hover:bg-neutral-50 text-neutral-700"
            >
              {copied === "code" ? "Copied!" : "Copy Code"}
            </button>
            <button
              type="button"
              onClick={handleEmail}
              className="w-full px-4 py-2.5 text-left text-sm hover:bg-neutral-50 text-neutral-700"
            >
              Email to Team
            </button>
            <button
              type="button"
              onClick={handlePublish}
              className="w-full px-4 py-2.5 text-left text-sm hover:bg-neutral-50 text-neutral-700"
            >
              {copied === "link" ? "Copied!" : "Publish to Web"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
