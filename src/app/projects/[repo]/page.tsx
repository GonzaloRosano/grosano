import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {
  ArrowLeft,
  ArrowRight,
  ArrowSquareOut,
} from "@phosphor-icons/react/dist/ssr";
import { BackLink } from "@/components/BackLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "@/components/LangToggle";
import { PROJECTS } from "@/data/content";
import { getProjectReadme } from "@/lib/github";
import { cleanReadme } from "@/lib/readme";
import { languageColor } from "@/lib/languageColors";

const publicProjects = PROJECTS.filter((p) => p.isPublic);

export function generateStaticParams() {
  return publicProjects.map((project) => ({ repo: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[repo]">
): Promise<Metadata> {
  const { repo } = await props.params;
  const project = publicProjects.find((p) => p.slug === repo);
  if (!project) return {};
  return {
    title: `${project.name} · Gonzalo Rosano`,
    description: project.summary.en,
    openGraph: project.image ? { images: [project.image] } : undefined,
  };
}

const markdownClassName =
  "markdown-body min-w-0 max-w-none bg-transparent! [&_p:has(img)]:flex [&_p:has(img)]:flex-wrap [&_p:has(img)]:items-center [&_p:has(img)]:gap-2 [&_img]:m-0! [&_img]:inline-block";

const buttonClassName =
  "flex items-center justify-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm transition-colors duration-200 hover:border-accent hover:text-accent";

export default async function ProjectPage(
  props: PageProps<"/projects/[repo]">
) {
  const { repo } = await props.params;
  const index = publicProjects.findIndex((p) => p.slug === repo);
  if (index === -1) notFound();

  const project = publicProjects[index];
  const prev = publicProjects[(index - 1 + publicProjects.length) % publicProjects.length];
  const next = publicProjects[(index + 1) % publicProjects.length];

  const [fetchedEn, fetchedEs] = await Promise.all([
    getProjectReadme(repo, "README.md"),
    getProjectReadme(repo, "README.es.md"),
  ]);

  // Si uno de los dos falla (ej. rate limit de la API en build time), mostramos
  // el otro igual en vez de dejar la seccion vacia para ese idioma.
  const rawEn = fetchedEn ?? fetchedEs;
  const rawEs = fetchedEs ?? fetchedEn;
  const readmeEn = rawEn ? cleanReadme(rawEn) : null;
  const readmeEs = rawEs ? cleanReadme(rawEs) : null;

  const shot = project.image && (
    <Image
      src={project.image}
      alt={project.name}
      fill
      priority
      sizes="(min-width: 1024px) 896px, 100vw"
      className="object-cover object-top"
    />
  );

  return (
    <>
      <ThemeToggle />
      <LangToggle />

      <main className="mx-auto flex w-full max-w-4xl flex-col px-6 py-16">
        <BackLink />

        <header className="mt-10 flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.name}
          </h1>

          <p className="lang-en max-w-2xl text-lg text-muted">
            {project.summary.en}
          </p>
          <p className="lang-es max-w-2xl text-lg text-muted">
            {project.summary.es}
          </p>

          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                <span
                  className="h-2 w-2 rounded-full border border-foreground/30"
                  style={{ backgroundColor: languageColor(tech) }}
                />
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2 text-sm text-white transition-opacity duration-200 hover:opacity-90"
              >
                <span className="lang-en">View deploy</span>
                <span className="lang-es">Ver deploy</span>
                <ArrowSquareOut size={14} />
              </a>
            )}
            <a
              href={`https://github.com/GonzaloRosano/${project.slug}`}
              target="_blank"
              rel="noreferrer noopener"
              className={buttonClassName}
            >
              <span className="lang-en">View on GitHub</span>
              <span className="lang-es">Ver en GitHub</span>
              <ArrowSquareOut size={14} />
            </a>
          </div>
        </header>

        {shot && (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl border border-border">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={project.name}
                className="absolute inset-0 block"
              >
                {shot}
              </a>
            ) : (
              shot
            )}
          </div>
        )}

        <div className="mt-12 min-w-0 border-t border-border pt-10">
          {readmeEn && (
            <div className={`lang-en ${markdownClassName}`}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {readmeEn}
              </ReactMarkdown>
            </div>
          )}
          {readmeEs && (
            <div className={`lang-es ${markdownClassName}`}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {readmeEs}
              </ReactMarkdown>
            </div>
          )}
        </div>

        <nav className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col gap-1 rounded-xl border border-border bg-surface p-4 transition duration-200 hover:border-accent hover:shadow-sm"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <ArrowLeft size={12} />
              <span className="lang-en">Previous</span>
              <span className="lang-es">Anterior</span>
            </span>
            <span className="font-medium">{prev.name}</span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col items-end gap-1 rounded-xl border border-border p-4 text-right transition-colors duration-200 hover:border-accent"
          >
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <span className="lang-en">Next</span>
              <span className="lang-es">Siguiente</span>
              <ArrowRight size={12} />
            </span>
            <span className="font-medium">{next.name}</span>
          </Link>
        </nav>
      </main>
    </>
  );
}
