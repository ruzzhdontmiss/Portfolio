"use client";
import { useEffect, useRef } from "react";

export default function AuroraCursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const raf = useRef(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const loop = () => {
      el.style.transform = `translate(${pos.current.x - 200}px, ${pos.current.y - 200}px)`;
      raf.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(139,111,216,0.18) 0%, rgba(97,144,199,0.10) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 2,
        willChange: "transform",
        mixBlendMode: "screen",
      }}
    />
  );
}
