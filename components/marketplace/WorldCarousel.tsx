import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { WORLDS } from "@/data/demo";

export function WorldCarousel() {
  const entries = Object.entries(WORLDS);
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {entries.map(([slug, w]) => (
        <Link key={slug} href={`/worlds/${slug}`} className="group">
          <Card className="overflow-hidden">
            <div className="relative h-40">
              <Image src={w.hero} alt={w.name} fill className="object-cover opacity-80" />
            </div>
            <div className="p-5">
              <div className="text-lg font-semibold">{w.name}</div>
              <div className="mt-1 text-sm text-zinc-300">{w.subtitle}</div>
              <div className="mt-4 text-sm text-zinc-200 group-hover:underline">
                Enter world →
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
