"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number>();

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMove = (e: MouseEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        glow.style.setProperty("--x", `${e.clientX}px`);
        glow.style.setProperty("--y", `${e.clientY}px`);
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden />;
}
