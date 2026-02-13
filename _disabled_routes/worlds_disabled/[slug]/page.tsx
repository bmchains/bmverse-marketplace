import { TopNav } from "@/components/marketplace/TopNav";
import { Footer } from "@/components/marketplace/Footer";
import { WorldHeader } from "@/components/marketplace/WorldHeader";
import { WorldTabs } from "@/components/marketplace/WorldTabs";

export default function WorldPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <TopNav />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <WorldHeader slug={params.slug} />
        <div className="mt-8">
          <WorldTabs slug={params.slug} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
