import Link from "next/link";
import Image from "next/image";
import { DEMO_ASSETS, WORLDS } from "@/data/demo";

export function MarketplacePreview() {
  const picks = DEMO_ASSETS.slice(0, 3);

  return (
    <section className="bg-[#050507] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.35em] text-white/55">MARKETPLACE</div>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
              Curated discovery. Museum spacing.
            </h2>
            <p className="mt-3 text-sm text-white/65">
              A minimal interface that prioritizes narrative, provenance, and rarity signals — without noise.
            </p>
          </div>

          <Link
            href="/explore"
            className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black shadow-glow"
          >
            Enter Marketplace
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {picks.map((a) => (
            <Link
              key={a.tokenId}
              href={`/asset/${a.chain}/${a.contract}/${a.tokenId}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={a.image}
                  alt={a.name}
                  fill
                  className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-xs tracking-[0.25em] text-white/55">
                  {WORLDS[a.world].name}
                </div>
                <div className="mt-2 text-sm font-semibold">{a.name}</div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/60">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1">
                    {a.elementPrimary}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1">
                    {a.tier}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1">
                    {a.mutationClass} · {a.mutationScore}
                  </span>
                </div>
                <div className="mt-4 text-sm text-white/70">
                  <span className="text-white">
                   {typeof a.priceEth === "number" ? `${a.priceEth.toFixed(2)} ETH` : "—"}
                  </span>
                  <span className="ml-2 text-white/50">Buy now</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
