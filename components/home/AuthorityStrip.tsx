export function AuthorityStrip() {
  const stats = [
    { k: "Research", v: "7+ years" },
    { k: "Footprint", v: "26 countries" },
    { k: "Focus", v: "Edutainment + Identity" },
    { k: "Layer", v: "Traits + Mutation" },
  ];

  return (
    <section className="border-y border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.k}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur"
          >
            <div className="text-xs tracking-[0.25em] text-white/50">{s.k}</div>
            <div className="mt-2 text-sm font-medium text-white">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
