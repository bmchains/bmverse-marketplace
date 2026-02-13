import { Card } from "@/components/ui/Card";
import { ELEMENTS, WORLDS } from "@/data/demo";

export function ExploreFilters() {
  return (
    <Card className="p-5">
      <div className="text-sm font-semibold">Filters</div>

      <div className="mt-5">
        <div className="text-xs text-zinc-400">World</div>
        <select className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm">
          <option value="">All</option>
          {Object.entries(WORLDS).map(([slug, w]) => (
            <option key={slug} value={slug}>
              {w.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <div className="text-xs text-zinc-400">Element</div>
        <select className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm">
          <option value="">All</option>
          {ELEMENTS.map((e) => (
            <option key={e.name} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <div className="text-xs text-zinc-400">Tier</div>
        <select className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm">
          <option value="">All</option>
          {["Genesis", "Rare", "Epic", "Mythic", "Ascended"].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <div className="text-xs text-zinc-400">Sale Type</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Buy Now", "Auction", "Offers"].map((x) => (
            <button
              key={x}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200 hover:bg-white/10"
            >
              {x}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="text-xs text-zinc-400">Mutation Score</div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {["0–49", "50–69", "70–89", "90–100"].map((r) => (
            <button
              key={r}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200 hover:bg-white/10"
            >
              {r}
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}
