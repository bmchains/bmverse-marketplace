import { BrainCircuit, ShieldCheck, Sparkles } from "lucide-react";

const CARDS = [
  {
    icon: BrainCircuit,
    title: "Signals → Understanding",
    body: "A research-driven layer that organizes content, traits, and identity into a coherent system.",
  },
  {
    icon: Sparkles,
    title: "Traits + Mutation",
    body: "Elemental lineage + mutation scoring creates a richer rarity model and stronger collectible psychology.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent provenance",
    body: "Every asset keeps clear on-chain provenance while your interface delivers premium narrative and discovery.",
  },
];

export function IntelligenceLayer() {
  return (
    <section id="intelligence" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.35em] text-white/55">INTELLIGENCE LAYER</div>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
            Built for depth — not hype.
          </h2>
          <p className="mt-3 text-sm text-white/65">
            BMverse focuses on a structured universe: worlds, elements, traits, and evolution — designed for identity.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <c.icon className="h-5 w-5 text-white/70" />
              <div className="mt-4 text-sm font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-white/60">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
