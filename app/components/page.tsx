"use client";

import Link from "next/link";
import { componentRegistry } from "@/app/component/registry";
import ComponentRenderer from "./ComponentRenderer";

function getComponentSlugs(): { slug: string; displayName: string }[] {
  return Object.keys(componentRegistry)
    .map((slug) => ({
      slug,
      displayName: slug.replace(/([A-Z])/g, " $1").trim() || slug,
    }))
    .sort((a, b) => a.displayName.localeCompare(b.displayName));
}

export default function ComponentsPage() {
  const components = getComponentSlugs();

  return (
    <div className="flex justify-center w-full min-h-screen bg-neutral pt-24 pb-12">
      <div className="w-full max-w-4xl px-6">
        <h1 className="text-2xl font-semibold text-neutral-800 mb-6">
          Components
        </h1>
        <ul className="flex flex-col gap-4">
          {components.map(({ slug, displayName }) => (
            <li
              key={slug}
              className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <Link
                href={`/components/${slug}`}
                className="flex flex-col sm:items-center gap-0 sm:gap-4 p-4 text-left text-neutral-800 hover:bg-neutral-50/50 transition-colors"
              >
                <div className="flex items-center justify-between sm:justify-start sm:min-w-[200px] py-2 sm:py-0">
                  <span className="font-medium">{displayName}</span>
                  <span className="text-neutral-400 text-sm sm:ml-2">→</span>
                </div>
                <div className="flex-1 min-h-0 w-full sm:max-w-md">
                  <ComponentRenderer slug={slug} compact />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
