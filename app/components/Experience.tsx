import type { ReactNode } from "react";
import { internships, organizations, type ExperienceItem } from "../data";
import { BriefcaseIcon, UsersIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

function Timeline({
  title,
  icon,
  items,
}: {
  title: string;
  icon: ReactNode;
  items: ExperienceItem[];
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-accent">
          {icon}
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <ol className="relative space-y-6 border-l border-line pl-6">
        {items.map((item) => (
          <li key={`${item.title}-${item.place}`} className="relative">
            <span className="absolute -left-7.75 top-6 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
            <article className="rounded-xl border border-line bg-surface p-5 transition hover:border-accent/40">
              <p className="font-mono text-xs text-accent">{item.period}</p>
              <h4 className="mt-1 text-lg font-semibold text-foreground">
                {item.title}
              </h4>
              <p className="text-sm text-slate-400">{item.place}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-400">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02. pengalaman"
          title="Pengalaman"
          subtitle="Perjalanan saya lewat pengalaman magang dan organisasi."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <Timeline
            title="Pengalaman Magang"
            icon={<BriefcaseIcon />}
            items={internships}
          />
          <Timeline
            title="Pengalaman Organisasi"
            icon={<UsersIcon />}
            items={organizations}
          />
        </div>
      </div>
    </section>
  );
}
