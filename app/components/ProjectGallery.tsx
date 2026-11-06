"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./Icons";

function Frame({
  src,
  alt,
  label,
  priority = false,
  sizes,
  onOpen,
}: {
  src: string;
  alt: string;
  label: string;
  priority?: boolean;
  sizes: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Perbesar ${alt}`}
      className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-surface text-left transition duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)]"
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono text-xs text-slate-500">{label}</span>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          unoptimized
          priority={priority}
          sizes={sizes}
          className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/50 font-mono text-sm text-accent opacity-0 backdrop-blur-[2px] transition group-hover:opacity-100">
          Klik untuk memperbesar
        </span>
      </div>
    </button>
  );
}

export default function ProjectGallery({
  images,
  title,
  children,
}: {
  images: string[];
  title: string;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const [first, ...rest] = images;
  const total = images.length;

  const label = (i: number) =>
    `gambar_${String(i + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  const alt = (i: number) => `${title} - gambar ${i + 1}`;

  const move = useCallback(
    (delta: number) =>
      setOpen((i) => (i === null ? i : (i + delta + total) % total)),
    [total],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, move]);

  const navBtn =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 text-foreground transition hover:border-accent hover:text-accent";

  return (
    <>
      {first && (
        <div className="mt-10">
          <Frame
            src={first}
            alt={alt(0)}
            label={label(0)}
            priority
            sizes="(min-width: 1152px) 1104px, 100vw"
            onOpen={() => setOpen(0)}
          />
        </div>
      )}

      {children}

      {rest.length > 0 && (
        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-mono text-sm text-accent">
              {"// galeri_proyek"}
            </h2>
            <span className="font-mono text-xs text-slate-500">
              {total} gambar
            </span>
          </div>
          <div className="columns-1 gap-6 md:columns-2">
            {rest.map((src, i) => (
              <div key={src} className="mb-6 break-inside-avoid">
                <Frame
                  src={src}
                  alt={alt(i + 1)}
                  label={label(i + 1)}
                  sizes="(min-width: 768px) 540px, 100vw"
                  onOpen={() => setOpen(i + 1)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Pratinjau ${title}`}
          className="fixed inset-0 z-60 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm sm:p-10"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Tutup pratinjau"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/90 text-foreground transition hover:border-accent hover:text-accent"
          >
            <CloseIcon />
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                aria-label="Gambar sebelumnya"
                onClick={(e) => {
                  e.stopPropagation();
                  move(-1);
                }}
                className={`${navBtn} left-3 sm:left-6`}
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                aria-label="Gambar berikutnya"
                onClick={(e) => {
                  e.stopPropagation();
                  move(1);
                }}
                className={`${navBtn} right-3 sm:right-6`}
              >
                <ChevronRightIcon />
              </button>
            </>
          )}

          <figure
            className="flex max-h-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open]}
              alt={alt(open)}
              width={1920}
              height={1200}
              unoptimized
              style={{ width: "auto", height: "auto" }}
              className="max-h-[80vh] max-w-full rounded-xl border border-line object-contain"
            />
            <figcaption className="mt-4 font-mono text-xs text-slate-400">
              {label(open)}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
