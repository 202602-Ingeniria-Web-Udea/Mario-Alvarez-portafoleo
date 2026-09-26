// Portfolio slide card with a cover image and a details button.
"use client";

import Image from "next/image";
import type { ProjectItem } from "@/data/profile";
import { DateBadge } from "@/components/atoms/DateBadge";
import { useLanguage } from "@/lib/LanguageContext";

interface PortfolioCardProps {
  project: ProjectItem;
  onLearnMore: (project: ProjectItem) => void;
}

export function PortfolioCard({ project, onLearnMore }: PortfolioCardProps) {
  const { t } = useLanguage();
  return (
    <article className="flex w-[260px] shrink-0 snap-start flex-col overflow-hidden bg-white shadow-sm dark:bg-neutral-800 sm:w-[300px]">
      <Image
        src={project.image}
        alt={`${project.title} cover`}
        width={600}
        height={400}
        className="h-40 w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-5">
        <DateBadge>{project.tag}</DateBadge>
        <h3 className="mt-3 text-base font-semibold text-ink dark:text-neutral-100">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted dark:text-neutral-400">
          {project.description}
        </p>
        <button
          type="button"
          onClick={() => onLearnMore(project)}
          className="mt-4 self-start text-sm font-semibold text-brand-600 hover:text-brand-500"
        >
          {t.learnMore}
        </button>
      </div>
    </article>
  );
}
