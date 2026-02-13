"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  label: string;
  headline: string;
  subline: string;
};

export function RotatingTitle({ intervalMs = 3000 }: { intervalMs?: number }) {
  const slides: Slide[] = useMemo(
    () => [
      {
        label: "BMverse",
        headline: "BMverse",
        subline:
          "A universe-first marketplace where elements, traits, and mutation turn collectibles into identity.",
      },
      {
        label: "ANTverse",
        headline: "ANTverse",
        subline:
          "The flagship realm — characters, elemental lineages, and mutation rarity designed for the BMverse ecosystem.",
      },
      {
        label: "Quantelium",
        headline: "Quantelium",
        subline:
          "A data-driven intelligence layer — analytics, trait logic, and research that powers discovery and rarity signals.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((v) => (v + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [intervalMs, slides.length]);

  const slide = slides[index];

  return (
    <div className="relative">
      <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
        {"BMverse • Antverse • Quantelium"}
      </div>

      <div className="mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.label}
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              <span className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
                {slide.headline}
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-zinc-300 md:text-lg">
              {slide.subline}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.label}
            type="button"
            aria-label={`Show ${s.label}`}
            onClick={() => setIndex(i)}
            className={
              "h-1.5 w-10 rounded-full transition " +
              (i === index ? "bg-white/80" : "bg-white/15 hover:bg-white/25")
            }
          />
        ))}
      </div>
    </div>
  );
}
