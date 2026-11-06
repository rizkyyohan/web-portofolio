import Image from "next/image";
import { languages, profile, skills, software } from "../data";
import SectionHeading from "./SectionHeading";

function Group({
  title,
  items,
  mono = false,
}: {
  title: string;
  items: string[];
  mono?: boolean;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface p-5">
      <h3 className="mb-3 font-mono text-sm text-accent">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={`rounded-md border border-line bg-surface-2 px-3 py-1.5 text-sm text-slate-300 transition hover:border-accent/50 hover:text-accent ${
              mono ? "font-mono" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01. tentang"
          title="Tentang Saya"
          subtitle="Sedikit lebih dalam tentang saya, kemampuan, dan perangkat yang saya gunakan."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[320px_1fr]">
          <div className="mx-auto w-full max-w-xs">
            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-accent/40" />
              <Image
                src={profile.photo}
                alt={`Foto ${profile.name}`}
                width={320}
                height={320}
                unoptimized
                className="relative aspect-square w-full rounded-2xl border border-line bg-surface object-cover"
              />
            </div>
          </div>

          <div>
            <div className="space-y-4 leading-relaxed text-slate-400">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Group title="// keahlian" items={skills} />
              <Group title="// bahasa_pemrograman" items={languages} mono />
              <div className="sm:col-span-2">
                <Group title="// perangkat_lunak" items={software} mono />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
