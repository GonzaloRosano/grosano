<div align="center">

# 🌐 grosano

**Landing personal de Gonzalo Rosano** — sitio estático, simple y con animaciones cuidadas.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black)
![License](https://img.shields.io/badge/Licencia-Privado-ff0066?style=flat-square)

</div>

![Screenshot](https://api.microlink.io/?url=http%3A%2F%2F212.28.181.170&screenshot=true&meta=false&embed=screenshot.url)

---

## 📖 Sobre el proyecto

Landing personal, minimalista, pensada para ser simple de mantener. No tiene backend ni base de datos: es 100% **estática**, exportada con Next.js y servida directo por nginx, sin ningún proceso de Node corriendo en el servidor.

La sección de presentación ("About me") **no está escrita a mano en el código** — se trae en build time desde el [README del perfil de GitHub](https://github.com/GonzaloRosano/GonzaloRosano) y se renderiza con el mismo formato visual que usa GitHub.

---

## ✨ Funcionalidades

- 🎬 Transición de entrada animada con GSAP
- 🧲 Hover magnético en los links de contacto
- 🌗 Switch de tema claro/oscuro, persistente en `localStorage`
- 🖱️ Scroll suave con Lenis + indicador visual de scroll
- 📄 Sección "About me" con el contenido real del perfil de GitHub, con estilo idéntico al de GitHub (`github-markdown-css`)
- 📱 Totalmente responsive

---

## 🛠️ Stack

| Categoría | Tecnología |
|---|---|
| Framework | [Next.js](https://nextjs.org) (exportación estática, `output: "export"`) |
| Estilos | Tailwind CSS v4 + `@tailwindcss/typography` |
| Animación | [GSAP](https://gsap.com) + [Lenis](https://lenis.darkroom.engineering) |
| Contenido dinámico | `react-markdown`, `remark-gfm`, `rehype-raw`, `github-markdown-css` |
| Iconos | [Phosphor Icons](https://phosphoricons.com) |

---

## 🚀 Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

---

## 📦 Build

```bash
npm run build
```

Genera un export estático en `out/` — solo HTML/CSS/JS, sin servidor Node.

---

## ☁️ Deploy

El sitio se sirve con **nginx puro**, nada de Node corriendo 24/7 en el servidor. `deploy.sh` automatiza todo el ciclo: build, empaquetado y subida por SSH.

```bash
bash deploy.sh
```

> Requiere la clave SSH configurada en la ruta indicada dentro del script. La contraseña de `sudo` se puede pasar por la variable de entorno `SUDO_PASS`, o queda a cargo del prompt interactivo.

---

## 🔄 Actualizar el "About me"

El contenido de esa sección se trae en build time desde [GonzaloRosano/GonzaloRosano](https://github.com/GonzaloRosano/GonzaloRosano). Para reflejar cambios:

1. Editar el README de ese repo
2. Correr `bash deploy.sh` acá

---

<div align="center">

Hecho por [Gonzalo Rosano](https://github.com/GonzaloRosano)

</div>
