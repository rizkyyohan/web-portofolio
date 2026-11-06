export default function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-mono text-sm text-accent">{index}</p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
      <div className="mt-5 h-px w-16 bg-linear-to-r from-accent to-accent-2" />
    </div>
  );
}
