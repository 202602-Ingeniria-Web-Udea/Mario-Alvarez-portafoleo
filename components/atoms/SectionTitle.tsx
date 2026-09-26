// Centered section heading with subtitle, reused across sections.
interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-[500px] text-center">
      <h2 className="text-2xl font-bold text-ink dark:text-neutral-100">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted dark:text-neutral-400">{subtitle}</p>
    </div>
  );
}
