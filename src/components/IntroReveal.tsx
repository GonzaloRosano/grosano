"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function IntroReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Si el documento no esta visible (ej. navegadores headless de screenshot),
    // el ticker de GSAP puede no correr nunca y el contenido queda en opacity:0
    // para siempre. En ese caso no ocultamos nada, se muestra directo.
    const isHidden = document.visibilityState !== "visible";
    if (reduceMotion || isHidden || !ref.current) return;

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

    // Salvaguarda: si por lo que sea el ticker de GSAP nunca corre (ej. un
    // navegador automatizado que lo pausa), forzamos que el contenido quede
    // visible igual pasado un tiempo prudencial.
    const fallback = window.setTimeout(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(targets, { opacity: 1, y: 0 });
    }, 2000);

    return () => {
      window.clearTimeout(fallback);
      ctx.revert();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
