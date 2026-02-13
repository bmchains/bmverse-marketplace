"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NODES = [
  { name: "ANTverse", href: "/worlds/antverse", desc: "Identity • Elements • Mutation" },
  { name: "BM Jewels", href: "/worlds/bm-jewels", desc: "Artifacts • Rarity • Value" },
  { name: "BM Galaxy", href: "/worlds/bm-galaxy", desc: "Cosmic assets • Lore" },
  { name: "Learn", href: "/learn", desc: "Knowledge • Growth" },
  { name: "Marketplace", href: "/explore", desc: "Discover • Collect" },
];

export function EcosystemOrbit() {
  return (
    <section id="ecosystem" className="bg-[#050507] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.35em] text-white/55">ECOSYSTEM ARCHITECTURE</div>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
            One platform. Multiple realms.
          </h2>
          <p className="mt-3 text-sm text-white/65">
            BMverse is structured as worlds — each world is a domain with its own assets, rules, and narrative.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
          {/* Orbit diagram */}
          <div className="relative aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-[10%] rounded-full border border-white/10" />
            <div className="absolute inset-[22%] rounded-full border border-white/10" />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="grid place-items-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-5 backdrop-blur">
                <div className="text-xs tracking-[0.35em] text-white/55">CORE</div>
                <div className="mt-1 text-base font-semibold">BMverse</div>
                <div className="mt-1 text-xs text-white/55">Traits → Identity</div>
              </div>
            </div>

            {/* nodes */}
            {[
              { n: NODES[0], x: 18, y: 20 },
              { n: NODES[1], x: 78, y: 28 },
              { n: NODES[2], x: 80, y: 72 },
              { n: NODES[3], x: 22, y: 78 },
              { n: NODES[4], x: 50, y: 10 },
            ].map(({ n, x, y }) => (
              <motion.div
                key={n.name}
                whileHover={{ scale: 1.05 }}
                className="absolute"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              >
                <Link
                  href={n.href}
                  className="block rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs text-white/80 backdrop-blur hover:bg-white/[0.08]"
                >
                  {n.name}
                </Link>
              </motion.div>
            ))}

            <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-violet-500/15 blur-[80px]" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-blue-500/10 blur-[90px]" />
          </div>

          {/* Node list */}
          <div className="space-y-4">
            {NODES.map((n) => (
              <Link
                key={n.name}
                href={n.href}
                className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold">{n.name}</div>
                    <div className="mt-1 text-sm text-white/60">{n.desc}</div>
                  </div>
                  <div className="text-sm text-white/50 group-hover:text-white">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
