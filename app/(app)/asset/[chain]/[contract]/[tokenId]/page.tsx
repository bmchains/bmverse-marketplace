import { TopNav } from "@/components/marketplace/TopNav";
import { Footer } from "@/components/marketplace/Footer";
import { AssetDetail } from "@/components/marketplace/AssetDetail";

export default function AssetPage({
  params
}: {
  params: { chain: string; contract: string; tokenId: string };
}) {
  return (
    <div>
      <TopNav />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <AssetDetail params={params} />
      </main>
      <Footer />
    </div>
  );
}
