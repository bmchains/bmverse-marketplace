import { BadgeCheck, Briefcase, Crown } from "lucide-react";

type Person = {
  name: string;
  role: string;
  blurb: string;
  icon: "crown" | "briefcase" | "badge";
};

const PEOPLE: Person[] = [
  {
    name: "Hesam Khalaj",
    role: "Founder",
    blurb:
      "Product vision, ecosystem design, and the BMverse thesis: traits, identity, and sustainable participation.",
    icon: "crown",
  },
  {
    name: "Ehsan Larani",
    role: "CFO & Marketing Advisor",
    blurb:
      "Finance strategy, partnerships, and narrative positioning — connecting BMverse to real demand and distribution.",
    icon: "briefcase",
  },
  {
    name: "Quantelium",
    role: "Research & Intelligence Layer",
    blurb:
      "Analytics, rarity signals, and discovery logic that makes the marketplace feel alive and data-driven.",
    icon: "badge",
  },
];

function Icon({ kind }: { kind: Person["icon"] }) {
  const cls = "h-4 w-4 text-zinc-100";
  if (kind === "crown") return <Crown className={cls} />;
  if (kind === "briefcase") return <Briefcase className={cls} />;
  return <BadgeCheck className={cls} />;
}

export function TeamSection() {
  return (
    <section id="team" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.35em] text-white/55">TEAM</div>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">Built with discipline.</h2>
          <p className="mt-3 text-sm text-white/65">
            A focused core team with a systems-first approach — building a universe interface, not a catalog.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
        {PEOPLE.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Icon kind={p.icon} />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-100">{p.name}</div>
                <div className="mt-1 text-xs text-zinc-300">{p.role}</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{p.blurb}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
