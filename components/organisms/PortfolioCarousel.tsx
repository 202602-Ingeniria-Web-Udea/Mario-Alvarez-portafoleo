// Horizontal scroll carousel of portfolio projects.
"use client";

import { useRef } from "react";
import { profile, type ProjectItem } from "@/data/profile";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { PortfolioCard } from "@/components/molecules/PortfolioCard";
import { useLanguage } from "@/lib/LanguageContext";

interface PortfolioCarouselProps {
  onLearnMore: (project: ProjectItem) => void;
}

export default function PortfolioCarousel({
  onLearnMore,
}: PortfolioCarouselProps) {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(amount: number) {
    trackRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  // Merge language-neutral project facts with the localized texts.
  const projects: ProjectItem[] = profile.projects.map((entry, index) => ({
    title: t.projects?.[index]?.title ?? "",
    tag: t.projects?.[index]?.tag ?? "",
    description: t.projects?.[index]?.description ?? "",
    details: t.projects?.[index]?.details ?? "",
    githubUrl: entry.githubUrl,
    image: entry.image,
  }));

  return (
    <section aria-labelledby="portfolio-heading">
      <div id="portfolio-heading">
        <SectionTitle title={t.portfolio.title} subtitle={t.portfolio.subtitle} />
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-320)}
          aria-label={t.portfolio.scrollLeft}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:bg-brand-100 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollBy(320)}
          aria-label={t.portfolio.scrollRight}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:bg-brand-100 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
        >
          →
        </button>
      </div>
      <div
        ref={trackRef}
        className="no-scrollbar mt-2 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
      >
        {projects.map((project) => (
          <PortfolioCard
            key={project.title}
            project={project}
            onLearnMore={onLearnMore}
          />
        ))}
      </div>
    </section>
  );
}
