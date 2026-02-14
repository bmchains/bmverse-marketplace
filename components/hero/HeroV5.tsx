"use client";

import ClientCanvas from "@/components/three/ClientCanvas";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const slides = [
  { title: "ETH-X", subtitle: "Where Ethereum Evolves Beyond Limits." },
  { title: "BMVERSE", subtitle: "The Infrastructure of Digital Civilization" },
  { title: "ANTVERSE", subtitle: "Where Identity Evolves" },
  { title: "QUANTELIUM", subtitle: "Intelligence Engineered" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function NavBtn({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => scrollToId(id)}
      className="text-sm text-white/70 hover:text-white transition"
    >
      {children}
    </button>
  );
}

export default function HeroV5() {
  const [index, setIndex] = useState(0);
  const current = useMemo(() => slides[index], [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050507] text-white">
      <ClientCanvas />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/80" />

      <header className="absolute top-0 z-20 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <button
            type="button"
            onClick={() => scrollToId("top")}
            className="text-sm md:text-base font-semibold tracking-[0.38em] text-white"
          >
            BMVERSE
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <NavBtn id="ethx">ETH-X</NavBtn>
            <NavBtn id="ecosystem">Ecosystem</NavBtn>
            <NavBtn id="intelligence">Intelligence</NavBtn>
            <NavBtn id="marketplace">Marketplace</NavBtn>
            <NavBtn id="team">Team</NavBtn>
          </nav>

          <Link
            href="/explore"
            className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black hover:scale-[1.03] transition inline-flex items-center justify-center"
          >
            Enter App
          </Link>
        </div>
      </header>

      <div id="top" className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto w-full max-w-6xl text-center">
          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              Worlds • Elements • Mutation • Identity
            </span>
          </div>

          <div className="mb-10 flex justify-center">
            <img
              src="/logo.png"
              alt="ETH-X BMverse"
              className="w-24 md:w-36 drop-shadow-[0_0_28px_rgba(34,255,120,0.45)]"
              style={{ transform: "perspective(900px) rotateX(12deg)" }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 34, filter: "blur(18px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -34, filter: "blur(18px)" }}
              transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-[13vw] md:text-[96px] font-bold tracking-[-0.06em] leading-none">
                {current.title}
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl text-white/70 tracking-wide">
                {current.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/explore"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black hover:scale-[1.03] transition inline-flex items-center justify-center"
            >
              Enter BMverse
            </Link>

            <button
              type="button"
              onClick={() => scrollToId("ethx")}
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white hover:border-white/60 transition inline-flex items-center justify-center"
            >
              Read ETH-X
            </button>

            <Link
              href="/explore?world=antverse"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition inline-flex items-center justify-center"
            >
              Enter ANTverse
            </Link>
          </div>

          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => scrollToId("ethx")}
              className="group inline-flex items-center gap-2 text-xs text-white/50 hover:text-white/70 transition"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/40 group-hover:bg-white/70 transition" />
              Scroll to ETH-X
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
