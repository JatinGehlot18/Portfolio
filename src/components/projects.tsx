import { ArrowUpRightIcon } from "./icons";
import { ProjectMedia } from "./project-media";
import { SectionHeading } from "./section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Projects" title="Things I've built" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`flex flex-col rounded-2xl border bg-surface p-4 transition-colors sm:p-5 ${
                project.builtWithClaudeCode
                  ? "border-highlight/25 hover:border-highlight/50"
                  : "border-border hover:border-accent/40"
              }`}
            >
              <ProjectMedia
                name={project.name}
                images={project.images}
                builtWithClaudeCode={project.builtWithClaudeCode}
              />

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-foreground">
                  {project.name}
                </h3>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={project.linkLabel ?? project.name}
                    className="flex-shrink-0 text-muted transition-colors hover:text-accent"
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                )}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted/60" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
