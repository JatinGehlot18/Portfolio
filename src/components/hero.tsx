import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  SparkleIcon,
} from "./icons";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div className="bg-grid fade-mask-b pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-[-10rem] h-[24rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pt-28">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Open to new opportunities
        </p>

        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 max-w-xl text-lg font-medium text-accent sm:text-xl">
          {profile.role}
        </p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-highlight sm:text-base">
          <SparkleIcon className="h-3.5 w-3.5" />
          {profile.tagline}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.bio}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] hover:bg-accent-strong"
          >
            View Projects
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
