"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
});

export default function ClientCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Scene />
    </div>
  );
}

