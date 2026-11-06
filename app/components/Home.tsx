import Image from "next/image";
import { profile } from "../data";
import { ArrowDownIcon } from "./Icons";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="order-2 md:order-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-2" />
            Terbuka untuk peluang kerja
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Selamat Datang di <span className="text-gradient">Portofolio</span>{" "}
            Saya
          </h1>
          <p className="mt-4 font-mono text-lg text-slate-300">
            Halo, saya {profile.name} &mdash; {profile.role}
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-400">
            {profile.tagline} {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent/80"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-line bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/60 hover:text-accent"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-accent to-accent-2 opacity-40 blur-lg" />
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-2">
              <Image
                src={profile.photo}
                alt={`Foto ${profile.name}`}
                width={360}
                height={360}
                priority
                unoptimized
                className="h-64 w-64 rounded-2xl object-cover sm:h-80 sm:w-80"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Gulir ke bagian tentang"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-accent md:block"
      >
        <ArrowDownIcon className="animate-bounce" />
      </a>
    </section>
  );
}
