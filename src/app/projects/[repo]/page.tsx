import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { BackLink } from "@/components/BackLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "@/components/LangToggle";
import { PROJECTS } from "@/data/content";
import { getProjectReadme } from "@/lib/github";
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
  };
}

const markdownClassName =
  "markdown-body min-w-0 max-w-none bg-transparent! [&_p:has(img)]:flex [&_p:has(img)]:flex-wrap [&_p:has(img)]:items-center [&_p:has(img)]:gap-2 [&_img]:m-0! [&_img]:inline-block";

const buttonClassName =
  "flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm transition-colors duration-200 hover:border-accent hover:text-accent";

export default async function ProjectPage(
  props: PageProps<"/projects/[repo]">
) {
  const { repo } = await props.params;
  const project = publicProjects.find((p) => p.slug === repo);

  if (!project) notFound();

  const [fetchedEn, fetchedEs] = await Promise.all([
    getProjectReadme(repo, "README.md"),
    getProjectReadme(repo, "README.es.md"),
  ]);

  // Si uno de los dos falla (ej. rate limit de la API en build time), mostramos
  // el otro igual en vez de dejar la seccion vacia para ese idioma.
  const readmeEn = fetchedEn ?? fetchedEs;
  const readmeEs = fetchedEs ?? fetchedEn;

  return (
    <>
      <ThemeToggle />
      <LangToggle />

      <main className="mx-auto flex w-full max-w-5xl flex-col px-6 py-16">
        <BackLink />

        <div className="mt-8 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-10">
          <div className="flex flex-col gap-3 lg:sticky lg:top-16 lg:w-72 lg:shrink-0">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.name}
            </h1>

            <p className="lang-en text-base text-muted">
              {project.summary.en}
            </p>
            <p className="lang-es text-base text-muted">
              {project.summary.es}
            </p>

            <ul className="mt-1 flex flex-wrap gap-2">
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

            <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap lg:flex-col">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm text-white transition-opacity duration-200 hover:opacity-90"
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
          </div>

          <div className="flex min-w-0 flex-1 flex-col border-t border-border pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
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
        </div>
      </main>
    </>
  );
}
