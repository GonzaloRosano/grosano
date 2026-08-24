"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

type Theme = "light" | "dark";

export function ThemeScript() {
  const script = `
    (function () {
      function syncTheme() {
        try {
          var stored = localStorage.getItem("theme");
          var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
          document.documentElement.setAttribute("data-theme", theme);
        } catch (e) {}
      }
      syncTheme();
      window.addEventListener("pageshow", function (e) {
        if (!e.persisted) return;
        // La pagina restaurada del bfcache queda pintada con el tema
        // congelado en el momento de salir; si aplicamos el nuevo tema con
        // las transiciones normales activas se ve un parpadeo animado.
        // Las desactivamos un frame para que el cambio sea instantaneo.
        var style = document.createElement("style");
        style.textContent = "*,*::before,*::after{transition:none!important}";
        document.head.appendChild(style);
        syncTheme();
        window.getComputedStyle(style).opacity;
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            document.head.removeChild(style);
          });
        });
      });
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    function sync() {
      const current = document.documentElement.getAttribute("data-theme") as Theme | null;
      setTheme(current ?? "light");
    }
    sync();
    window.addEventListener("pageshow", sync);
    return () => window.removeEventListener("pageshow", sync);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar tema"
      className="fixed right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors duration-200 hover:border-accent hover:text-accent active:scale-[0.98]"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
