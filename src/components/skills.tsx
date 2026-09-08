import { SectionHeading } from "./section-heading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Skills" title="Tools I work with" />

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                  >
                    {item}
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
