"use client";

import { useEffect, useRef } from "react";

type Blob = { x: number; y: number; r: number; vx: number; vy: number };

export function PageBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    let paused = false;

    const blobs: Blob[] = Array.from({ length: 4 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.28 + i * 0.05,
      vx: (Math.random() - 0.5) * 0.00025,
      vy: (Math.random() - 0.5) * 0.00025,
    }));

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function isDark() {
      return document.documentElement.classList.contains("dark");
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const dark = isDark();
      const base = dark ? 255 : 0;

      blobs.forEach((b, i) => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -0.2 || b.x > 1.2) b.vx *= -1;
        if (b.y < -0.2 || b.y > 1.2) b.vy *= -1;

        const cx = b.x * width;
        const cy = b.y * height;
        const radius = b.r * Math.max(width, height);
        const alpha = dark ? 0.05 - i * 0.006 : 0.035 - i * 0.004;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        gradient.addColorStop(0, `rgba(${base},${base},${base},${Math.max(alpha, 0.006)})`);
        gradient.addColorStop(1, `rgba(${base},${base},${base},0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });
    }

    function loop() {
      if (!paused && visible) draw();
      raf = requestAnimationFrame(loop);
    }

    resize();
    draw();

    if (!reduced) {
      raf = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      paused = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);

    const mo = new MutationObserver(() => draw());
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
