import { Card } from "@/components/ui/Card";

export function MarketPulse() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="p-5">
        <div className="text-xs text-zinc-400">Trending Element</div>
        <div className="mt-2 text-lg font-semibold">Shadow</div>
        <div className="mt-2 text-sm text-zinc-300">Floor +18% • Volume +2.1 ETH</div>
      </Card>
      <Card className="p-5">
        <div className="text-xs text-zinc-400">Rising World</div>
        <div className="mt-2 text-lg font-semibold">ANTverse</div>
        <div className="mt-2 text-sm text-zinc-300">Listings 42 • Owners 6</div>
      </Card>
      <Card className="p-5">
        <div className="text-xs text-zinc-400">Mutation Watch</div>
        <div className="mt-2 text-lg font-semibold">Dual → Quintessence</div>
        <div className="mt-2 text-sm text-zinc-300">Highest score today: 97</div>
      </Card>
    </div>
  );
}
