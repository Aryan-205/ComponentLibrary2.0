"use client";

import { componentRegistry } from "@/app/component/registry";

type ComponentRendererProps = {
  slug: string;
  compact?: boolean;
};

export default function ComponentRenderer({ slug, compact = false }: ComponentRendererProps) {
  const Component = componentRegistry[slug];
  if (!Component) return null;

  if (compact) {
    return (
      <div className="h-[400px] w-full min-w-[200px] flex  items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white shrink-0">
        <div className="scale-75 origin-center pointer-events-none *:max-h-[100px] *:max-w-full">
          <Component />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[320px] flex justify-center items-center rounded-xl border border-neutral-200 bg-white overflow-hidden [&>*]:min-h-0 [&>*]:h-auto [&>*]:w-full">
      <Component />
    </div>
  );
}
