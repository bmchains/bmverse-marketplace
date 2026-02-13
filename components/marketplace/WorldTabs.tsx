import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { AssetGrid } from "./AssetGrid";

export function WorldTabs({ slug }: { slug: string }) {
  const tabs: Array<[string, string]> = [
    ["Marketplace", `/explore?world=${slug}`],
    ["Lore", `/worlds/${slug}#lore`],
    ["Traits Map", `/worlds/${slug}#traits`],
    ["Top Holders", `/worlds/${slug}#holders`],
  ];

  return (
    <div className="space-y-4">
      <Card className="p-3">
        <div className="flex flex-wrap gap-2">
          {tabs.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200 hover:bg-white/10"
            >
              {label}
            </Link>
          ))}
        </div>
      </Card>

      <AssetGrid />

      <section id="lore">
        <Card className="p-6">
          <div className="text-lg font-semibold">Lore</div>
          <p className="mt-2 text-sm text-zinc-300">
            Replace this with the world narrative (short → medium). Keep it collectible, not
            documentation.
          </p>
        </Card>
      </section>

      <section id="traits">
        <Card className="p-6">
          <div className="text-lg font-semibold">Traits Map</div>
          <p className="mt-2 text-sm text-zinc-300">
            Visualize Element → Mutation → Tier. (Phase 2: graph UI)
          </p>
        </Card>
      </section>

      <section id="holders">
        <Card className="p-6">
          <div className="text-lg font-semibold">Top Holders</div>
          <p className="mt-2 text-sm text-zinc-300">
            Placeholder. (Phase 2: holders + distribution visualization)
          </p>
        </Card>
      </section>
    </div>
  );
}

