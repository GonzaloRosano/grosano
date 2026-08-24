"use client";

import { ArrowLeft } from "@phosphor-icons/react";

export function BackLink() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (window.history.length > 1) {
      e.preventDefault();
      window.history.back();
    }
  }

  return (
    <a
      href="/"
      onClick={handleClick}
      className="flex w-fit items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
    >
      <ArrowLeft size={14} />
      <span className="lang-en">Back</span>
      <span className="lang-es">Volver</span>
    </a>
  );
}
