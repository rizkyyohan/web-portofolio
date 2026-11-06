import { contact } from "../data";
import { MailIcon, MapPinIcon, PhoneIcon, socialIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const details = [
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: MailIcon,
    },
    {
      label: "Telepon",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/[^+\d]/g, "")}`,
      icon: PhoneIcon,
    },
    {
      label: "Lokasi",
      value: contact.location,
      href: undefined,
      icon: MapPinIcon,
    },
  ];

  return (
    <section id="contact" className="bg-surface/40 px-6 pt-24 pb-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04. kontak"
          title="Hubungi Saya"
          subtitle="Tertarik berkolaborasi atau sekadar ingin menyapa? Hubungi saya lewat kontak atau sosial media di bawah ini."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="mb-5 font-mono text-sm text-accent">
              {"// kontak"}
            </h3>
            <ul className="space-y-4">
              {details.map(({ label, value, href, icon: Icon }) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
                      <Icon />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">
                        {label}
                      </span>
                      <span className="text-foreground">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        className="flex items-center gap-4 transition hover:text-accent"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="mb-5 font-mono text-sm text-accent">
              {"// sosial_media"}
            </h3>
            <ul className="space-y-3">
              {contact.socials.map((s) => {
                const Icon = socialIcon(s.name);
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-line bg-surface-2 px-4 py-3 transition hover:border-accent/50"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-accent">
                          <Icon />
                        </span>
                        <span>
                          <span className="block text-foreground">
                            {s.name}
                          </span>
                          <span className="font-mono text-xs text-slate-500">
                            {s.handle}
                          </span>
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-accent"
                      >
                        &rarr;
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <footer className="mt-16 border-t border-line pt-6 text-center font-mono text-xs text-slate-500">
          Dibuat dengan React, Next.js &amp; Tailwind CSS
        </footer>
      </div>
    </section>
  );
}
