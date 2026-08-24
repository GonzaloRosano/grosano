import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ArrowLeft, ArrowSquareOut, Star } from "@phosphor-icons/react/dist/ssr";
import { getPublicProjects, getProjectReadme } from "@/lib/github";
import { languageColor } from "@/lib/languageColors";

export async function generateStaticParams() {
  const projects = await getPublicProjects();
  return projects.map((project) => ({ repo: project.name }));
}

export default async function ProjectPage(
  props: PageProps<"/projects/[repo]">
) {
  const { repo } = await props.params;
  const projects = await getPublicProjects();
  const project = projects.find((p) => p.name === repo);

  if (!project) notFound();

  const readme = await getProjectReadme(repo);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col px-6 py-16">
      <Link
        href="/"
        className="flex w-fit items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-accent"
      >
        <ArrowLeft size={14} />
        Volver
      </Link>

      <div className="mt-8 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-10">
        <div className="flex flex-col gap-2 lg:sticky lg:top-16 lg:w-72 lg:shrink-0">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.name}
          </h1>

          {project.description && (
            <p className="text-base text-muted">{project.description}</p>
          )}

          <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-muted">
            {project.language && (
              <span className="flex items-center gap-1.5">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: languageColor(project.language) }}
                />
                {project.language}
              </span>
            )}
            {project.stars > 0 && (
              <span className="flex items-center gap-1">
                <Star size={14} weight="fill" />
                {project.stars}
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-stretch">
            <a
              href={`https://github.com/GonzaloRosano/${project.name}`}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Ver en GitHub
              <ArrowSquareOut size={14} />
            </a>
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm text-white transition-opacity duration-200 hover:opacity-90"
              >
                Ver deploy
                <ArrowSquareOut size={14} />
              </a>
            )}
          </div>
        </div>

        {readme && (
          <div className="markdown-body min-w-0 max-w-none flex-1 border-t border-border bg-transparent! pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 [&_p:has(img)]:flex [&_p:has(img)]:flex-wrap [&_p:has(img)]:items-center [&_p:has(img)]:gap-2 [&_img]:m-0! [&_img]:inline-block">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {readme}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </main>
  );
}
