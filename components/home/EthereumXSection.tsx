"use client";

export default function EthereumXSection() {
  return (
    <section
      id="ecosystem"
      className="relative bg-[#050507] py-28 md:py-36 px-6 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Ethereum-X — BMverse
        </h2>

        <p className="mt-5 text-lg md:text-xl text-emerald-300">
          “Where Ethereum Evolves Beyond Limits.”
        </p>

        <p className="mt-6 text-white/70 max-w-3xl leading-relaxed">
          Ethereum-X is the next-generation blockchain evolution by BMverse,
          designed to surpass Ethereum 2.0 through AI-driven consensus, dynamic
          scalability, and true sustainability. It delivers performance,
          inclusivity, and cross-chain simplicity — redefining what Ethereum can
          become.
        </p>

        <div className="mt-14 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
          <table className="w-full text-sm">
            <thead className="bg-white/[0.04]">
              <tr>
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">Ethereum 2.0</th>
                <th className="p-4 text-left text-emerald-300">
                  Ethereum-X (BMverse)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="p-4">Consensus</td>
                <td className="p-4">Proof-of-Stake (PoS)</td>
                <td className="p-4 text-emerald-200">
                  AI-Enhanced Proof-of-Participation (AIPoP)
                </td>
              </tr>
              <tr>
                <td className="p-4">Speed</td>
                <td className="p-4">15 – 30 TPS</td>
                <td className="p-4 text-emerald-200">3,000+ TPS (native scaling)</td>
              </tr>
              <tr>
                <td className="p-4">Gas Cost</td>
                <td className="p-4">Moderate</td>
                <td className="p-4 text-emerald-200">Up to 90% cheaper</td>
              </tr>
              <tr>
                <td className="p-4">Smart Contracts</td>
                <td className="p-4">EVM</td>
                <td className="p-4 text-emerald-200">Smart Context Contracts (AI-optimized)</td>
              </tr>
              <tr>
                <td className="p-4">Staking</td>
                <td className="p-4">ETH only</td>
                <td className="p-4 text-emerald-200">Dual Yield: ETH + BMUSD</td>
              </tr>
              <tr>
                <td className="p-4">Development</td>
                <td className="p-4">Fragmented</td>
                <td className="p-4 text-emerald-200">Unified SDK + AI Audit</td>
              </tr>
              <tr>
                <td className="p-4">Governance</td>
                <td className="p-4">Off-chain</td>
                <td className="p-4 text-emerald-200">On-chain Quadratic Voting</td>
              </tr>
              <tr>
                <td className="p-4">Sustainability</td>
                <td className="p-4">99% &lt; PoW</td>
                <td className="p-4 text-emerald-200">99.9% efficient + AI scheduling</td>
              </tr>
              <tr>
                <td className="p-4">Interoperability</td>
                <td className="p-4">Bridges required</td>
                <td className="p-4 text-emerald-200">Built-in multi-chain wallet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-lg font-semibold text-white">🧩 Core Architecture</div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Ethereum-X introduces dynamic scalability, AI-driven optimization, and
              modular consensus adaptation beyond Ethereum 2.0’s static validator model.
              It expands or compresses resources in real time for unmatched flexibility
              and speed.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-lg font-semibold text-white">⚙️ AIPoP Consensus</div>
            <ul className="mt-3 list-disc pl-5 text-sm text-white/70 space-y-2">
              <li>Rewards validators based on performance, not capital size</li>
              <li>Removes the 32 ETH minimum barrier</li>
              <li>Achieves ≈ 30% faster block finality</li>
              <li>Supports micro-staking for global accessibility</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-lg font-semibold text-white">🚀 Speed & Cost</div>
            <ul className="mt-3 list-disc pl-5 text-sm text-white/70 space-y-2">
              <li>3,000+ TPS via native L2 acceleration + parallel validation</li>
              <li>Up to 90% lower fees — no bridges or multi-layer gas costs</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-lg font-semibold text-white">🌱 Sustainability</div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Through adaptive node sleeping and AI-managed power scheduling, Ethereum-X
              achieves 99.9% less energy use per transaction — a new benchmark in green
              blockchain technology.
            </p>
          </div>
        </div>

        <div id="intelligence" className="mt-20 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-lg font-semibold text-white">🤖 Smart Contract Intelligence</div>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Smart Context Contracts (SCC) are AI-aware and self-optimizing:
            auto-adjust gas, enable multi-chain execution, and route transactions
            to the lowest-cost path.
          </p>
        </div>

        <div id="marketplace" className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-lg font-semibold text-white">🛠 Developer Ecosystem</div>
          <ul className="mt-3 list-disc pl-5 text-sm text-white/70 space-y-2">
            <li>Unified SDK for all networks</li>
            <li>AI-auditing tools and auto-debug assistants</li>
            <li>One-click deployment with grant + bounty support</li>
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-lg font-semibold text-white">🗳 Governance</div>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            On-chain quadratic voting empowers users, validators, and developers with
            transparent decision-making.
          </p>
        </div>
      </div>
    </section>
  );
}
