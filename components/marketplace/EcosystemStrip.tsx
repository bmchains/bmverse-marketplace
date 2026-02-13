import React from "react";
import { Code2, GraduationCap, Layers3, Users } from "lucide-react";

const ITEMS: { title: string; desc: string; icon: React.ReactNode }[] = [
  {
    title: "Marketplace",
    desc: "Buy, sell, and discover assets with element-first navigation and mutation rarity.",
    icon: <Layers3 className="h-4 w-4 text-zinc-100" />,
  },
  {
    title: "Traits Lab",
    desc: "A trait framework where elements combine into mutation — designed for evolvable collections.",
    icon: <GraduationCap className="h-4 w-4 text-zinc-100" />,
  },
  {
    title: "Creators & Tools",
    desc: "Templates, SDK hooks, and creator workflows to ship worlds, drops, and utilities.",
    icon: <Code2 className="h-4 w-4 text-zinc-100" />,
  },
  {
    title: "Community",
    desc: "Identity-driven collecting, quests, and long-term participation across realms.",
    icon: <Users className="h-4 w-4 text-zinc-100" />,
  },
];

export function EcosystemStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div>
        <h2 className="text-xl font-semibold">Ecosystem</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-300">
          A minimal set of modules that compound over time — designed to scale from collecting into a full BMverse
          experience.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {ITEMS.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              {it.icon}
            </div>
            <div className="mt-4 text-sm font-medium text-zinc-100">{it.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
