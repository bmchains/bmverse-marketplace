import { TopNav } from "@/components/marketplace/TopNav";
import { Footer } from "@/components/marketplace/Footer";
import { Vault } from "@/components/marketplace/Vault";

export default function VaultPage() {
  return (
    <div>
      <TopNav />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-semibold">My Vault</h1>
        <p className="mt-2 text-sm text-zinc-300">
          Inventory + identity loadout (Character • Jewel • Aura).
        </p>
        <div className="mt-6">
          <Vault />
        </div>
      </main>
      <Footer />
    </div>
  );
}
