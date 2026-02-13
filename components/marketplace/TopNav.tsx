import Link from "next/link";
import { Compass, Layers, Sparkles, Vault, GraduationCap } from "lucide-react";

const NavItem = ({
  href,
  icon: Icon,
  label
}: {
  href: string;
  icon: any;
  label: string;
}) => (
  <Link
    href={href}
    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-zinc-200 hover:bg-white/5"
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </Link>
);

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-white/10" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">BMverse</div>
            <div className="text-[11px] text-zinc-400">Marketplace</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavItem href="/explore" icon={Compass} label="Explore" />
          <NavItem href="/worlds/antverse" icon={Layers} label="Worlds" />
          <NavItem href="/drops" icon={Sparkles} label="Drops" />
          <NavItem href="/learn" icon={GraduationCap} label="Learn" />
          <NavItem href="/vault" icon={Vault} label="My Vault" />
        </nav>

        <div className="flex items-center gap-2">
          <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}
