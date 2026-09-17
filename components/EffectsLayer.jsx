"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });
const AuroraCursor = dynamic(() => import("./AuroraCursor"), { ssr: false });

export default function EffectsLayer() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.6;
    const onScroll = () => {
      if (!active && window.scrollY > threshold) setActive(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  if (!active) return null;

  return (
    <>
      <ParticleField />
      <AuroraCursor />
    </>
  );
}
