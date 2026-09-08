import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Contact
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
          Open to full-time roles, freelance work, and interesting problems.
          Reach out and I&apos;ll get back to you.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] hover:bg-accent-strong"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
            <ArrowUpRightIcon className="h-3 w-3" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
            <ArrowUpRightIcon className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
