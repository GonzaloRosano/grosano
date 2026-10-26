import { ArrowUpRight, Lock } from "@phosphor-icons/react/dist/ssr";
import { PROJECTS, type Project } from "@/data/content";
import { languageColor } from "@/lib/languageColors";

function projectHref(project: Project): { href: string; external: boolean } | null {
  if (project.isPublic) return { href: `/projects/${project.slug}`, external: false };
  if (project.demo) return { href: project.demo, external: true };
  return null;
}

function Card({ project }: { project: Project }) {
  const link = projectHref(project);
  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="font-medium">{project.name}</span>
        {link ? (
          <ArrowUpRight
            size={18}
            className="shrink-0 text-muted transition-colors duration-200 group-hover:text-accent"
          />
        ) : (
          <span className="flex shrink-0 items-center gap-1 text-xs text-muted">
            <Lock size={12} />
            <span className="lang-en">Private</span>
            <span className="lang-es">Privado</span>
          </span>
        )}
      </div>

      <p className="lang-en mt-2 text-sm text-muted">{project.summary.en}</p>
      <p className="lang-es mt-2 text-sm text-muted">{project.summary.es}</p>

      <div className="mt-auto flex items-center gap-2 pt-5 text-xs text-muted">
        <span
          className="h-2.5 w-2.5 rounded-full border border-foreground/30"
          style={{ backgroundColor: languageColor(project.tech) }}
        />
        {project.stack.join(" · ")}
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col rounded-xl border border-border p-5 transition-colors duration-200";

  if (!link) return <div className={className}>{body}</div>;

  return (
    <a
      href={link.href}
      {...(link.external
        ? { target: "_blank", rel: "noreferrer noopener" }
        : {})}
      className={`${className} hover:border-accent`}
    >
      {body}
    </a>
  );
}

export function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="w-full max-w-4xl border-t border-border px-6 py-16"
    >
      <h2 className="text-xl font-semibold tracking-tight">
        <span className="lang-en">Projects</span>
        <span className="lang-es">Proyectos</span>
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {featured.map((project) => (
          <Card key={project.slug} project={project} />
        ))}
      </div>

      <h3 className="mt-12 text-sm font-medium text-muted">
        <span className="lang-en">More</span>
        <span className="lang-es">Más</span>
      </h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {others.map((project) => (
          <Card key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
