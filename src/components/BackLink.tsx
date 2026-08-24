"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowLeft } from "@phosphor-icons/react";

const NEAR_TOP_THRESHOLD = 80;

export function BackLink() {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let lastY = window.scrollY;
    let visible = true;
    let frame: number;

    function setVisible(next: boolean) {
      if (next === visible) return;
      visible = next;
      gsap.to(el, {
        opacity: next ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    function tick() {
      const y = window.scrollY;
      if (y <= NEAR_TOP_THRESHOLD) {
        setVisible(true);
      } else if (y < lastY - 0.5) {
        setVisible(true);
      } else if (y > lastY + 0.5) {
        setVisible(false);
      }
      lastY = y;
      frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (window.history.length > 1) {
      e.preventDefault();
      window.history.back();
    }
  }

  return (
    <a
      ref={ref}
      href="/"
      onClick={handleClick}
      className="fixed left-1/2 top-5 z-20 flex w-fit -translate-x-1/2 items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
    >
      <ArrowLeft size={14} />
      <span className="lang-en">Back</span>
      <span className="lang-es">Volver</span>
    </a>
  );
}
