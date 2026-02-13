import { Card } from "@/components/ui/Card";

export function Vault() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="p-6">
        <div className="text-lg font-semibold">Identity Loadout</div>
        <p className="mt-2 text-sm text-zinc-300">
          Equip 1 Character, 1 Jewel, and 1 Element Aura.
        </p>
        <div className="mt-4 grid gap-3">
          {[
            ["Character", "None equipped"],
            ["Jewel", "None equipped"],
            ["Aura", "None selected"]
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="text-xs text-zinc-400">{k}</div>
              <div className="mt-1 text-sm font-medium">{v}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="text-lg font-semibold">My Assets</div>
        <p className="mt-2 text-sm text-zinc-300">
          Show user holdings here (phase 2: wallet indexing).
        </p>
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-10 text-center text-sm text-zinc-400">
          Connect wallet to load assets.
        </div>
      </Card>
    </div>
  );
}
