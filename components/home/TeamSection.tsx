export default function TeamSection() {
  return (
    <section id="team" className="bg-black py-24 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Core Team</h2>
        <p className="mt-4 text-white/60">
          Builders, strategists, and engineers shaping Ethereum-X and the BMverse ecosystem.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-10">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="h-28 w-28 mx-auto rounded-full bg-gradient-to-br from-emerald-300/80 to-black border border-emerald-300/20" />
            <h3 className="mt-6 text-xl font-semibold">Hesam Khalaj</h3>
            <p className="text-white/60">Founder & Architect</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="h-28 w-28 mx-auto rounded-full bg-gradient-to-br from-emerald-300/80 to-black border border-emerald-300/20" />
            <h3 className="mt-6 text-xl font-semibold">Ehsan Larani</h3>
            <p className="text-white/60">CFO & Strategy</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="h-28 w-28 mx-auto rounded-full bg-gradient-to-br from-emerald-300/80 to-black border border-emerald-300/20" />
            <h3 className="mt-6 text-xl font-semibold">Omid Larani</h3>
            <p className="text-white/60">Lead Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
