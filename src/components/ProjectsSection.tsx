import Link from "next/link";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { getPublicProjects } from "@/lib/github";
import { languageColor } from "@/lib/languageColors";

export async function ProjectsSection() {
  const projects = await getPublicProjects();
  if (projects.length === 0) return null;

  return (
    <section className="w-full max-w-3xl border-t border-border px-6 py-16">
      <h2 className="text-xl font-semibold tracking-tight">Projects</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={`/projects/${project.name}`}
            className="group flex flex-col gap-1.5 border-b border-border py-4 transition-colors duration-200"
          >
            <span className="font-medium text-accent group-hover:underline">
              {project.name}
            </span>

            {project.description && (
              <span className="text-sm text-muted">{project.description}</span>
            )}

            <div className="mt-1 flex items-center gap-4 text-xs text-muted">
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
          </Link>
        ))}
      </div>
    </section>
  );
}
