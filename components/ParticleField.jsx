"use client";
import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const cv = canvasRef.current, ctx = cv.getContext("2d");
    let W, H, raf;
    const parts = [];
    const N = Math.min(110, Math.floor(innerWidth / 12));
    for (let i = 0; i < N; i++) parts.push({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
      r: Math.random() * 1.8 + .6, a: Math.random() * .5 + .25,
    });

    const resize = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
    resize(); addEventListener("resize", resize);

    let mx = innerWidth / 2, my = innerHeight / 2;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    addEventListener("mousemove", onMove);

    (function loop() {
      ctx.clearRect(0, 0, W, H);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const d = Math.hypot(p.x - mx, p.y - my);
        const inAurora = d < 220;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * (inAurora ? 1.8 : 1), 0, 7);
        ctx.fillStyle = inAurora
          ? `rgba(139,111,216,${Math.min(.95, p.a + .4)})`
          : `rgba(97,144,199,${p.a})`;
        ctx.fill();
        if (inAurora) { p.vx += (mx - p.x) * .00012; p.vy += (my - p.y) * .00012; }
        p.vx = Math.max(-.9, Math.min(.9, p.vx));
        p.vy = Math.max(-.9, Math.min(.9, p.vy));
      }
      for (let i = 0; i < parts.length; i++) for (let j = i + 1; j < parts.length; j++) {
        const a = parts[i], b = parts[j], dd = Math.hypot(a.x - b.x, a.y - b.y);
        if (dd < 110) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(122,168,224,${.12 * (1 - dd / 110)})`;
          ctx.lineWidth = 1; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(loop);
    })();

    return () => {
      removeEventListener("mousemove", onMove);
      removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <canvas ref={canvasRef} id="particles" />;
}
