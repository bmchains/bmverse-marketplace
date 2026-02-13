import React from "react";
import { BookOpen, Boxes, ShieldCheck, Sparkles } from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "Worlds, not collections",
    desc: "A universe-first structure that organizes assets into living realms for long-term ecosystem growth.",
    icon: <Boxes className="h-4 w-4 text-zinc-100" />,
  },
  {
    title: "Elements as navigation",
    desc: "Explore by element — then discover mutation paths and rarity signals across the BMverse framework.",
    icon: <Sparkles className="h-4 w-4 text-zinc-100" />,
  },
  {
    title: "Mutation-driven rarity",
    desc: "Traits become more than visuals. Lineage and mutation score turn collecting into strategy and identity.",
    icon: <BookOpen className="h-4 w-4 text-zinc-100" />,
  },
  {
    title: "Security & transparency",
    desc: "Clear provenance, trusted links, and a minimal UI designed to keep buyers focused and safe.",
    icon: <ShieldCheck className="h-4 w-4 text-zinc-100" />,
  },
];

export function BMverseOverview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">BMverse at a glance</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-300">
            A minimal, universe-first marketplace UI — built around elements, mutation, and worlds.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                {f.icon}
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-100">{f.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
