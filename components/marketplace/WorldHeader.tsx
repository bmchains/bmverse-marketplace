import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { WORLDS } from "@/data/demo";

export function WorldHeader({ slug }: { slug: string }) {
  const w = (WORLDS as any)[slug];
  const name = w?.name ?? "World";
  const subtitle = w?.subtitle ?? "World hub";
  const hero = w?.hero ?? "/antverse-hero.jpg";

  return (
    <Card className="overflow-hidden">
      <div className="relative h-52">
        <Image src={hero} alt={name} fill className="object-cover opacity-85" />
      </div>
      <div className="p-6">
        <div className="text-2xl font-semibold">{name}</div>
        <div className="mt-2 text-sm text-zinc-300">{subtitle}</div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ["Floor", "0.08 ETH"],
            ["Owners", "6"],
            ["Listings", "42"]
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="text-xs text-zinc-400">{k}</div>
              <div className="mt-1 text-lg font-semibold">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
