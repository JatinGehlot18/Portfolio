import { SectionHeading } from "./section-heading";
import { education, profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="About" title="A bit about me" />
        <div className="grid gap-12 md:grid-cols-5">
          <p className="text-base leading-relaxed text-muted md:col-span-3">
            {profile.bio} I care about building things that hold up under
            real usage — low-latency data pipelines, clean APIs, and
            interfaces that don&apos;t get in the way. Over the last few
            years that&apos;s meant everything from logistics tooling to
            ad-tech dashboards to LLM-backed products.
          </p>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Education
            </h3>
            <ul className="mt-4 space-y-4">
              {education.map((item) => (
                <li key={item.degree} className="text-sm">
                  <p className="font-medium text-foreground">{item.degree}</p>
                  <p className="text-muted">{item.institute}</p>
                  <p className="mt-0.5 text-xs text-muted">
                    {item.detail} &middot; {item.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
