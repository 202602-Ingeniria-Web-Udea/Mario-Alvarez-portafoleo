// Single education entry: school + period on the left, details on the right.
import type { EducationItem } from "@/data/profile";
import { DateBadge } from "@/components/atoms/DateBadge";

interface EducationRowProps {
  item: EducationItem;
}

export function EducationRow({ item }: EducationRowProps) {
  return (
    <article className="grid gap-4 bg-white p-6 shadow-sm dark:bg-neutral-800 md:grid-cols-[280px_1fr] md:gap-8">
      <div>
        <h3 className="text-base font-semibold text-ink dark:text-neutral-100">{item.school}</h3>
        <p className="mt-2 text-sm text-muted dark:text-neutral-400">
          {item.role} <DateBadge>{item.period}</DateBadge>
        </p>
      </div>
      <div className="md:border-l md:border-page md:pl-8 md:dark:border-neutral-700">
        {item.certificate && (
          <h4 className="text-base font-semibold text-ink dark:text-neutral-100">
            {item.certificate}
          </h4>
        )}
        <p className="mt-2 text-sm leading-relaxed text-muted dark:text-neutral-400">
          {item.description}
        </p>
      </div>
    </article>
  );
}
