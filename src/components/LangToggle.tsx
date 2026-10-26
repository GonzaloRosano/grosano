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
    <div
      role="group"
      aria-label="Idioma"
      className="lang-seg relative grid h-8 grid-cols-2 items-center rounded-full bg-foreground/5 p-0.5 text-xs font-semibold"
    >
      <span aria-hidden className="lang-seg-thumb absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-accent/15 ring-1 ring-accent/30" />
      {(["en", "es"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => select(code)}
          aria-pressed={lang === code}
          aria-label={code === "en" ? "English" : "Español"}
          data-code={code}
          className="lang-seg-btn relative z-10 flex h-7 w-9 items-center justify-center rounded-full uppercase text-muted outline-offset-2 transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
        >
          {code}
        </button>
      ))}
    </div>
  );
}
