"use client";

import { useEffect, useState } from "react";

type Lang = "es" | "en";

export function LangScript() {
  const script = `
    try {
      var stored = localStorage.getItem("lang");
      var lang = stored || (navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en");
      document.documentElement.setAttribute("data-lang", lang);
    } catch (e) {}
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export function LangToggle() {
  const [lang, setLang] = useState<Lang | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-lang") as Lang | null;
    setLang(current ?? "en");
  }, []);

  function toggle() {
    const next: Lang = lang === "es" ? "en" : "es";
    setLang(next);
    document.documentElement.setAttribute("data-lang", next);
    localStorage.setItem("lang", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar idioma"
      className="fixed left-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border text-xs font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent active:scale-[0.98]"
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}
