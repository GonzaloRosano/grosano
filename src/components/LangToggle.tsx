"use client";

import { useEffect, useState } from "react";

type Lang = "es" | "en";

export function LangScript() {
  const script = `
    (function () {
      function syncLang() {
        try {
          var stored = localStorage.getItem("lang");
          var lang = stored || (navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en");
          document.documentElement.setAttribute("data-lang", lang);
        } catch (e) {}
      }
      syncLang();
      window.addEventListener("pageshow", function (e) {
        if (e.persisted) syncLang();
      });
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export function LangToggle() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    function sync() {
      const current = document.documentElement.getAttribute("data-lang") as Lang | null;
      if (current) setLang(current);
    }
    sync();
    window.addEventListener("pageshow", sync);
    return () => window.removeEventListener("pageshow", sync);
  }, []);

  function select(next: Lang) {
    setLang(next);
    document.documentElement.setAttribute("data-lang", next);
    localStorage.setItem("lang", next);
  }

  return (
    <div className="fixed left-5 top-5 z-20 flex h-10 items-center gap-1.5 rounded-full bg-background px-3 text-xs font-semibold">
      <button
        type="button"
        onClick={() => select("en")}
        aria-pressed={lang === "en"}
        className={`underline-offset-4 transition-colors duration-200 ${
          lang === "en" ? "text-accent underline" : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="text-border">|</span>
      <button
        type="button"
        onClick={() => select("es")}
        aria-pressed={lang === "es"}
        className={`underline-offset-4 transition-colors duration-200 ${
          lang === "es" ? "text-accent underline" : "text-muted hover:text-foreground"
        }`}
      >
        ES
      </button>
    </div>
  );
}
