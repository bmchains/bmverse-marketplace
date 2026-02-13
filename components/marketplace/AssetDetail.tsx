import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { DEMO_ASSETS, WORLDS } from "@/data/demo";

export function AssetDetail({
  params
}: {
  params: { chain: string; contract: string; tokenId: string };
}) {
  const asset =
    DEMO_ASSETS.find(
      (a) => a.contract.toLowerCase() === params.contract.toLowerCase() && a.tokenId === params.tokenId
    ) ?? DEMO_ASSETS[0];

  const world = WORLDS[asset.world];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="overflow-hidden">
        <div className="relative aspect-square">
          <Image src={asset.image} alt={asset.name} fill className="object-cover" />
        </div>
      </Card>

      <div className="space-y-4">
        <Card className="p-6">
          <div className="text-sm text-zinc-400">{world.name}</div>
          <h1 className="mt-1 text-2xl font-semibold">{asset.name}</h1>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              {asset.elementPrimary}
              {asset.elementSecondary ? ` + ${asset.elementSecondary}` : ""}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              {asset.tier}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              {asset.mutationClass} • {asset.mutationScore}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              {asset.utilityRole}
            </span>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="text-xs text-zinc-400">Price</div>
            <div className="mt-1 text-2xl font-semibold">{asset.priceEth ?? "—"} ETH</div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black">
                Buy Now
              </button>
              <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
                Make Offer
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-300">
            <Link
              className="hover:underline"
              href={`https://opensea.io/assets/ethereum/${params.contract}/${params.tokenId}`}
              target="_blank"
              rel="noreferrer"
            >
              View on OpenSea →
            </Link>
            <Link
              className="hover:underline"
              href={`https://etherscan.io/token/${params.contract}?a=${params.tokenId}`}
              target="_blank"
              rel="noreferrer"
            >
              View on Etherscan →
            </Link>
          </div>
        </Card>

        <Card className="p-6">
          <div className="text-lg font-semibold">Identity Panel</div>
          <p className="mt-2 text-sm text-zinc-300">
            Lore + lineage + mutation explanation. Keep it short (3–5 lines) + expand on click.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              ["World", world.name],
              ["Element", asset.elementPrimary],
              ["Mutation", `${asset.mutationClass} (${asset.mutationScore})`],
              ["Tier", asset.tier]
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-xs text-zinc-400">{k}</div>
                <div className="mt-1 text-sm font-medium">{v}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
