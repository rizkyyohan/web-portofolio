import { notFound } from "next/navigation";
import ProjectGallery from "../../components/ProjectGallery";
import { projects } from "../../data";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];

  return (
    <>
      <header>
        <p className="mb-3 font-mono text-sm text-accent">
          {`proyek_${String(index + 1).padStart(2, "0")}`}
        </p>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-400">
          {project.description}
        </p>
        <div className="mt-6 h-px w-16 bg-linear-to-r from-accent to-accent-2" />
      </header>

      <ProjectGallery images={project.images} title={project.title}>
        <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="mb-5 font-mono text-sm text-accent">
              {"// deskripsi"}
            </h2>
            <div className="space-y-5 leading-relaxed text-slate-300">
              {project.details.map((paragraph, i) => (
                <p
                  key={paragraph}
                  className={i === 0 ? "text-lg text-foreground" : undefined}
                >
                  {paragraph}
                </p>
              ))}
              {project.videoUrl && (
                <p>
                  Video demonstrasi:{" "}
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline underline-offset-4 transition hover:text-accent-2"
                  >
                    klik disini
                  </a>
                </p>
              )}
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-line bg-surface p-6 lg:sticky lg:top-24">
            <h2 className="mb-4 font-mono text-sm text-accent">
              {"// teknologi"}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-line bg-surface-2 px-3 py-1.5 font-mono text-xs text-slate-300"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <dl className="mt-6 space-y-3 border-t border-line pt-5 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-slate-500">Jumlah gambar</dt>
                <dd className="font-mono text-foreground">
                  {project.images.length}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-500">Teknologi</dt>
                <dd className="font-mono text-foreground">
                  {project.tags.length}
                </dd>
              </div>
            </dl>
          </aside>
        </section>
      </ProjectGallery>
    </>
  );
}

export function ProjectDetailsSkeleton() {
  return (
    <div className="animate-pulse" aria-hidden>
      <div className="h-4 w-24 rounded bg-surface-2" />
      <div className="mt-4 h-12 w-3/4 rounded-lg bg-surface-2" />
      <div className="mt-5 space-y-2">
        <div className="h-5 w-full max-w-3xl rounded bg-surface-2" />
        <div className="h-5 w-2/3 rounded bg-surface-2" />
      </div>
      <div className="mt-10 aspect-video w-full rounded-2xl border border-line bg-surface" />
      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-3">
          <div className="h-4 w-24 rounded bg-surface-2" />
          <div className="h-4 w-full rounded bg-surface-2" />
          <div className="h-4 w-11/12 rounded bg-surface-2" />
          <div className="h-4 w-4/5 rounded bg-surface-2" />
        </div>
        <div className="h-40 rounded-2xl border border-line bg-surface" />
      </div>
    </div>
  );
}
