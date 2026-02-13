export const dynamic = "force-dynamic";

import HeroV5Client from "@/components/hero/HeroV5Client";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/70">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-[-0.02em]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="bg-[#050507] text-white">
      <HeroV5Client />

      {/* Authority Strip */}
      <section className="border-t border-white/10 bg-black/30">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
            {[
              ["Worlds", "BMverse • ANTverse • Quantelium"],
              ["Identity", "Elements • Mutation • Tier"],
              ["Marketplace", "Curated, minimal, premium UI"],
              ["Infra", "Server-grade deployment ready"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/50">{k}</div>
                <div className="mt-2 text-sm md:text-base text-white/80">{v}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Ecosystem */}
      <section id="ecosystem" className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col gap-10">
            <SectionTitle
              eyebrow="Ecosystem Architecture"
              title="A universe-first marketplace — structured as worlds, not collections."
              subtitle="BMverse is designed like a civilization interface: worlds, elements, mutation paths, and identity. This layout is intentional: it builds trust, retention, and narrative rarity."
            />

            {/* Minimal “Orbit” grid (safe, no heavy canvas) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "BMverse Core",
                  desc: "Unified entry layer, identity, and navigation across worlds.",
                  tag: "Root Layer",
                },
                {
                  title: "ANTverse",
                  desc: "Character-driven world for elements, evolution, and community identity.",
                  tag: "World",
                  href: "/worlds/antverse",
                },
                {
                  title: "Quantelium",
                  desc: "Intelligence-forward layer. Experimental, engineered, future-ready.",
                  tag: "Intelligence",
                },
              ].map((x) => (
                <Card key={x.title} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold">{x.title}</div>
                    <Pill>{x.tag}</Pill>
                  </div>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    {x.desc}
                  </p>
                  {x.href ? (
                    <div className="mt-5">
                      <Link
                        href={x.href}
                        className="text-sm text-white/80 hover:text-white underline underline-offset-4"
                      >
                        Enter →
                      </Link>
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <Pill>Worlds</Pill>
              <Pill>Elements</Pill>
              <Pill>Mutation</Pill>
              <Pill>Tier</Pill>
              <Pill>Identity</Pill>
            </div>
          </div>
        </Container>
      </section>

      {/* Intelligence */}
      <section id="intelligence" className="py-16 md:py-20 border-t border-white/10 bg-white/[0.02]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <SectionTitle
              eyebrow="The Intelligence Layer"
              title="Designed for evolution — not static rarity."
              subtitle="Instead of a flat attribute list, BMverse supports an identity narrative: elemental lineage, mutation class, and tier psychology — presented like a character sheet."
            />

            <Card className="p-6">
              <div className="text-lg font-semibold">What users feel instantly</div>
              <ul className="mt-4 space-y-3 text-sm text-white/60">
                <li>• Cinematic entry experience (Hero V5 WebGL)</li>
                <li>• Worlds-first organization, not marketplace chaos</li>
                <li>• Collectibility through structure: Elements → Mutation → Tier</li>
                <li>• High-end spacing: museum-like presentation</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/explore"
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:scale-[1.02] transition"
                >
                  Open Marketplace
                </Link>
                <Link
                  href="/vault"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  My Vault
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Marketplace Preview */}
      <section id="marketplace" className="py-16 md:py-20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionTitle
              eyebrow="Marketplace"
              title="Curated grid, premium filters, fast exploration."
              subtitle="This is a front-end built to feel like a global platform. The UI is minimal by design — to amplify perceived value."
            />
            <Link
              href="/explore"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:scale-[1.02] transition inline-flex items-center justify-center"
            >
              Enter Explore →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              ["Trending Worlds", "ANTverse is positioned as the flagship entry realm."],
              ["Element Gate", "Elements act as a first-class taxonomy for discovery."],
              ["Mutation Signal", "Mutation score & class create narrative rarity."],
            ].map(([t, d]) => (
              <Card key={t} className="p-6">
                <div className="text-lg font-semibold">{t}</div>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{d}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section id="team" className="py-16 md:py-20 border-t border-white/10 bg-white/[0.02]">
        <Container>
          <SectionTitle
            eyebrow="Team"
            title="Built by a founder-led team with a platform mindset."
            subtitle="Replace these placeholders with your real team members. The layout is intentionally minimal and authority-first."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              ["Hesam Khalaj", "Founder / Architect", "BMverse"],
              ["Ehsan Larani", "CFO / Marketing Advisor", "BMverse"],
              ["Omid Larani", "Technical Developer", "BMverse"],
            ].map(([name, role, org]) => (
              <Card key={name} className="p-6">
                <div className="text-lg font-semibold">{name}</div>
                <div className="mt-2 text-sm text-white/70">{role}</div>
                <div className="mt-3 text-xs text-white/50">{org}</div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/explore"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:scale-[1.02] transition inline-flex items-center justify-center"
            >
              Start Exploring
            </Link>
            <a
              href="#ecosystem"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition inline-flex items-center justify-center"
            >
              Back to Ecosystem
            </a>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-white/50">
            <div>© {new Date().getFullYear()} BMverse. All rights reserved.</div>
            <div className="flex gap-4">
              <Link className="hover:text-white/80" href="/explore">
                Explore
              </Link>
              <Link className="hover:text-white/80" href="/vault">
                Vault
              </Link>
              <Link className="hover:text-white/80" href="/worlds/antverse">
                ANTverse
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}

