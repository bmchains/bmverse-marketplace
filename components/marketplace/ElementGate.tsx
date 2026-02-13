import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ELEMENTS } from "@/data/demo";

export function ElementGate() {
  return (
    <Card className="p-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {ELEMENTS.map((el) => (
          <Link
            key={el.name}
            href={`/explore?element=${encodeURIComponent(el.name)}`}
            className="group rounded-2xl border border-white/10 bg-black/30 p-4 hover:bg-black/50"
          >
            <div className="text-sm font-medium">{el.name}</div>
            <div className="mt-1 text-xs text-zinc-400">{el.hint}</div>
            <div className="mt-3 h-1 w-10 rounded-full bg-white/20 group-hover:bg-white/35" />
          </Link>
        ))}
      </div>
    </Card>
  );
}
