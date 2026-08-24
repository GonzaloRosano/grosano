"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CaretDown } from "@phosphor-icons/react";

const NEAR_TOP_THRESHOLD = 80;

export function ScrollCue() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const bounce = reduceMotion
      ? null
      : gsap.to(el, {
          y: 8,
          duration: 0.9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

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

    return () => {
      cancelAnimationFrame(frame);
      bounce?.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
    >
      <CaretDown size={18} />
    </div>
  );
}
