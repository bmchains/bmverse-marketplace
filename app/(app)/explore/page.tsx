import { TopNav } from "@/components/marketplace/TopNav";
import { ExploreFilters } from "@/components/marketplace/ExploreFilters";
import { AssetGrid } from "@/components/marketplace/AssetGrid";
import { Footer } from "@/components/marketplace/Footer";

export default function ExplorePage() {
  return (
    <div>
      <TopNav />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row">
          <aside className="md:w-80">
            <ExploreFilters />
          </aside>
          <section className="flex-1">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h1 className="text-2xl font-semibold">Explore</h1>
              <div className="text-xs text-zinc-300">Demo data • wireframe-ready</div>
            </div>
            <AssetGrid />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
