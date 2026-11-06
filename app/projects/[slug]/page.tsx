import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeftIcon } from "../../components/Icons";
import { projects } from "../../data";
import ProjectDetails, { ProjectDetailsSkeleton } from "./project-details";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Rizky Yohan`,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  return (
    <main className="px-6 pt-28 pb-24">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-slate-400 transition hover:text-accent"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Kembali ke Proyek
        </Link>

        <Suspense fallback={<ProjectDetailsSkeleton />}>
          <ProjectDetails params={params} />
        </Suspense>
      </div>
    </main>
  );
}
