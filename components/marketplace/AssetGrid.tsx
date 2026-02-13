import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { DEMO_ASSETS, WORLDS } from "@/data/demo";

export function AssetGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {DEMO_ASSETS.map((a) => (
        <Link
          key={`${a.contract}:${a.tokenId}`}
          href={`/asset/${a.chain}/${a.contract}/${a.tokenId}`}
          className="group"
        >
          <Card className="overflow-hidden">
            <div className="relative h-52">
              <Image src={a.image} alt={a.name} fill className="object-cover opacity-90" />
            </div>
            <div className="p-5">
              <div className="text-sm text-zinc-400">{WORLDS[a.world].name}</div>
              <div className="mt-1 text-base font-semibold">{a.name}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                  {a.elementPrimary}
                  {a.elementSecondary ? ` + ${a.elementSecondary}` : ""}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                  {a.tier}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                  {a.mutationClass} • {a.mutationScore}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-zinc-300">
                  {a.priceEth ? `${a.priceEth} ETH` : "—"}
                </div>
                <div className="text-sm text-zinc-200 group-hover:underline">View →</div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
