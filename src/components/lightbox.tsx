"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronIcon, CloseIcon } from "./icons";

export function Lightbox({
  images,
  index,
  name,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  name: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const multi = images.length > 1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (multi && e.key === "ArrowLeft") onPrev();
      if (multi && e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext, multi]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${name} screenshot viewer`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      {multi && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 sm:left-6"
          >
            <ChevronIcon className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 sm:right-6"
          >
            <ChevronIcon className="h-5 w-5" />
          </button>
        </>
      )}

      <div
        className="relative h-full max-h-[85vh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={
            multi
              ? `Screenshot of ${name} (${index + 1}/${images.length})`
              : `Screenshot of ${name}`
          }
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      {multi && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5"
        >
          {images.map((src, i) => (
            <span
              key={src}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-4 bg-white" : "w-1.5 bg-white/35"
              }`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body,
  );
}
