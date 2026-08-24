"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function IntroReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(targets, { opacity: 0, y: 14 });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: "power3.out",
        delay: 0.1,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
