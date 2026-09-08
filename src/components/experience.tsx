import { SectionHeading } from "./section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative space-y-10 border-l border-border pl-8">
          {experience.map((job) => (
            <div key={job.company} className="relative">
              <span className="absolute -left-[2.32rem] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {job.role} <span className="text-muted">· {job.company}</span>
                </h3>
                <span className="text-sm text-muted">
                  {job.start} – {job.end}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-muted">{job.location}</p>

              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted/60" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted"
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
