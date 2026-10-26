// Se ejecuta antes del primer paint (ver layout.tsx) y marca el <html> con
// "reveal-pending". La animacion de entrada de [data-reveal] vive en CSS
// (globals.css), asi no depende de que cargue ni hidrate JS. Si el usuario
// prefiere menos movimiento o el documento no esta visible (navegadores
// headless de screenshot), no se marca y el contenido se muestra directo.
export function RevealScript() {
  const script = `
    (function () {
      try {
        var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        var isHidden = document.visibilityState !== "visible";
        if (!reduceMotion && !isHidden) {
          document.documentElement.classList.add("reveal-pending");
        }
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
