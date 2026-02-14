export const dynamic = "force-dynamic";

import HeroV5 from "@/components/hero/HeroV5";
import EthereumXSection from "@/components/home/EthereumXSection";
import TeamSection from "@/components/home/TeamSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroV5 />
      <EthereumXSection />
      <TeamSection />
    </main>
  );
}
