import Image from "next/image";
import Link from "next/link";
import { projects } from "../data";
import { ArrowRightIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03. proyek"
          title="Proyek"
          subtitle="Beberapa project yang pernah saya kerjakan."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-1 hover:border-accent/50"
            >
              <div className="relative aspect-video overflow-hidden border-b border-line bg-surface-2">
                <Image
                  src={project.images[0]}
                  alt={`Pratinjau ${project.title}`}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-foreground transition group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 self-start rounded-lg border border-accent/50 px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-background"
                >
                  Lihat Detail
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
