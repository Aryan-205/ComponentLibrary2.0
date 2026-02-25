import { notFound } from "next/navigation";
import { readFileSync, existsSync, readdirSync } from "fs";
import path from "path";
import ShareMenu from "./ShareMenu";
import ComponentRenderer from "../ComponentRenderer";

const COMPONENT_DIR = path.join(process.cwd(), "app", "component");

export function generateStaticParams(): { slug: string }[] {
  const files = readdirSync(COMPONENT_DIR);
  return files
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => ({ slug: f.replace(/\.tsx$/, "") }));
}

function getComponentSource(slug: string): string | null {
  if (!/^[A-Za-z0-9]+$/.test(slug)) return null;
  const filePath = path.join(COMPONENT_DIR, `${slug}.tsx`);
  if (!existsSync(filePath)) return null;
  try {
    return readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
}

function getDisplayName(slug: string): string {
  return slug.replace(/([A-Z])/g, " $1").trim() || slug;
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ComponentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sourceCode = getComponentSource(slug);
  if (sourceCode === null) notFound();

  const displayName = getDisplayName(slug);

  return (
    <div className="flex flex-col w-full min-h-screen bg-neutral-100 pt-24 pb-12">
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-semibold text-neutral-800">
            {displayName}
          </h1>
          <ShareMenu sourceCode={sourceCode} />
        </div>
        <div className="mb-8">
          <div className="px-4 py-3 border border-neutral-200 border-b-0 rounded-t-xl bg-neutral-50 text-sm text-neutral-500 font-medium">
            Preview
          </div>
          <div className="min-h-[320px] max-h-[70vh] overflow-auto rounded-b-xl border border-neutral-200 bg-white flex justify-center items-center">
            <ComponentRenderer slug={slug} />
          </div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-neutral-100 bg-neutral-50 text-sm text-neutral-500 font-medium">
            Source code
          </div>
          <pre className="p-4 overflow-x-auto text-sm text-neutral-800">
            <code>{sourceCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
