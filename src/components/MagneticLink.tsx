"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function MagneticLink({
  children,
  className,
  href,
  target,
  rel,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const handleMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      xTo(relX * 0.35);
      yTo(relY * 0.35);
    };

    const handleLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);
    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}
