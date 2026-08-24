export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Astro: "#ff5a03",
  Rust: "#dea584",
  PHP: "#4F5D95",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Python: "#3572A5",
  "C#": "#178600",
};

export function languageColor(language: string | null): string {
  if (!language) return "var(--muted)";
  return LANGUAGE_COLORS[language] ?? "var(--muted)";
}
