"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronIcon, ExpandIcon, SparkleIcon } from "./icons";
import { Lightbox } from "./lightbox";

export function ProjectMedia({
  name,
  images,
  builtWithClaudeCode,
}: {
  name: string;
  images?: string[];
  builtWithClaudeCode?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) {
    return null;
  }

  const multi = images.length > 1;
  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);
  const openLightbox = () => setLightboxOpen(true);

  return (
    <div className="mb-5">
      <div
        role="button"
        tabIndex={0}
        onClick={openLightbox}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openLightbox();
          }
        }}
        aria-label={`View full-size screenshot of ${name}`}
        className="group relative h-56 w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-surface-2 sm:h-64"
      >
        <Image
          src={images[index]}
          alt={
            multi
              ? `Screenshot of ${name} (${index + 1}/${images.length})`
              : `Screenshot of ${name}`
          }
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-contain p-3"
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <ExpandIcon className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        {builtWithClaudeCode && (
          <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full border border-highlight/40 bg-highlight-soft px-2 py-1 text-[10px] font-semibold text-highlight backdrop-blur-sm">
            <SparkleIcon className="h-3 w-3" />
            Built with Claude Code
          </span>
        )}

        {multi && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronIcon className="h-3.5 w-3.5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronIcon className="h-3.5 w-3.5" />
            </button>
          </>
        )}
      </div>

      {multi && (
        <div className="mt-2.5 flex items-center justify-center gap-1.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-4 bg-accent" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      )}

      {lightboxOpen && (
        <Lightbox
          images={images}
          index={index}
          name={name}
          onClose={() => setLightboxOpen(false)}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </div>
  );
}
