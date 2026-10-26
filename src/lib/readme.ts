// El README de cada repo trae su propio titulo, captura y enlace de idioma.
// La pagina del proyecto ya muestra eso con datos curados, asi que se quita
// para no repetirlo.
const DEV_SECTIONS =
  /^##\s+[^\p{L}\p{N}\s]*\s*(getting started|structure|status|deploy|primeros pasos|estructura|estado|despliegue)\b/iu;

export function cleanReadme(markdown: string): string {
  return markdown
    .split(/^(?=## )/m)
    .filter((section) => !DEV_SECTIONS.test(section))
    .join("")
    .replace(/^\s*<div align="center">[\s\S]*?<\/div>\s*/i, "")
    .replace(/^\s*#\s+.*\r?\n/, "")
    .replace(/^.*Read this in \[.*\r?\n/gim, "")
    .replace(/^.*Leelo en \[.*\r?\n/gim, "")
    .replace(/^!\[Screenshot\]\([^)]*\)\s*\r?\n/gim, "")
    .replace(/^\s*---\s*\r?\n/, "")
    .trim();
}
