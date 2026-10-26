"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  EnvelopeSimple,
  FileText,
  House,
  SquaresFour,
  User,
} from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "@/components/LangToggle";

type Item = {
  key: string;
  href: string;
  anchor?: string;
  icon: typeof House;
  en: string;
  es: string;
};

const ITEMS: Item[] = [
  { key: "home", href: "/", anchor: "home", icon: House, en: "Home", es: "Inicio" },
  { key: "projects", href: "/#projects", anchor: "projects", icon: SquaresFour, en: "Projects", es: "Proyectos" },
  { key: "about", href: "/#about", anchor: "about", icon: User, en: "About", es: "Sobre mí" },
  { key: "contact", href: "/#contact", anchor: "contact", icon: EnvelopeSimple, en: "Contact", es: "Contacto" },
  { key: "cv", href: "/cv", icon: FileText, en: "CV", es: "CV" },
];

const SECTION_IDS = ITEMS.flatMap((i) => (i.anchor ? [i.anchor] : []));

function useActiveKey(pathname: string): string {
  const [section, setSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;
    const targets = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    targets.forEach((el) => observer.observe(el));

    // Contacto es corta y al llegar al fondo nunca cruza la zona activa.
    function checkBottom() {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      if (atBottom) setSection("contact");
    }
    window.addEventListener("scroll", checkBottom, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkBottom);
    };
  }, [pathname]);

  if (pathname === "/cv") return "cv";
  if (pathname.startsWith("/projects")) return "projects";
  return section;
}

export function SiteNav() {
  const pathname = usePathname();
  const active = useActiveKey(pathname);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, item: Item) {
    if (pathname !== "/" || !item.anchor) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const target = document.getElementById(item.anchor);
    if (!target) return;
    e.preventDefault();
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(item.anchor === "home" ? 0 : target, { offset: -72 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    history.replaceState(null, "", item.anchor === "home" ? "/" : `/#${item.anchor}`);
  }

  function linkClass(key: string, extra: string) {
    return `${extra} items-center justify-center rounded-full transition-colors duration-200 ${
      active === key
        ? "bg-accent/10 text-accent"
        : "text-muted hover:text-foreground"
    }`;
  }

  return (
    <div className="no-print">
      <div className="pointer-events-none fixed inset-x-0 top-4 z-30">
        <div className="mx-auto flex max-w-4xl justify-end px-6">
          <div className="pointer-events-auto flex h-11 items-center gap-1 rounded-full border border-border bg-background/90 px-1.5 backdrop-blur">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>

      <nav
        aria-label="Principal"
        className="fixed left-1/2 top-4 z-30 hidden h-11 -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-background/90 px-1.5 backdrop-blur lg:flex"
      >
        {ITEMS.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            onClick={(e) => handleClick(e, item)}
            aria-current={active === item.key ? "page" : undefined}
            className={linkClass(item.key, "flex h-8 px-4 text-sm font-medium")}
          >
            <span className="lang-en">{item.en}</span>
            <span className="lang-es">{item.es}</span>
          </Link>
        ))}
      </nav>

      <nav
        aria-label="Principal"
        className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 mx-auto flex max-w-md items-center justify-around rounded-full border border-border bg-background/90 p-1.5 backdrop-blur lg:hidden"
      >
        {ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.key}
              href={item.href}
              onClick={(e) => handleClick(e, item)}
              aria-current={active === item.key ? "page" : undefined}
              className={linkClass(
                item.key,
                "flex min-w-14 flex-1 flex-col gap-0.5 px-1 py-1.5 text-[10px] font-medium"
              )}
            >
              <Icon size={20} weight={active === item.key ? "fill" : "regular"} />
              <span className="lang-en">{item.en}</span>
              <span className="lang-es">{item.es}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
