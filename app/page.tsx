import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-8">
      <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-balance text-3xl font-semibold lg:text-5xl">Build 10x Faster with Bolabits</h2>
              <h2 className="text-balance text-2xl lg:text-3xl">Get unique components for free</h2>
            </div>
              <div className="flex justify-center gap-3">
                  <button className="rounded-lg px-4 py-2 bg-green-500 text-white shadow-md">
                      <Link href="/components">Get Started</Link>
                  </button>
                  <button className="rounded-lg px-4 py-2 bg-white shadow-md">
                      <Link href="/installation">Documents</Link>
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
}