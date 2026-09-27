// Horizontal scroll carousel of portfolio projects.
"use client";

import { useRef } from "react";
import { profile, type ProjectItem } from "@/data/profile";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { PortfolioCard } from "@/components/molecules/PortfolioCard";
import { useLanguage } from "@/lib/LanguageContext";
import { useReveal } from "@/lib/useReveal";

interface PortfolioCarouselProps {
  onLearnMore: (project: ProjectItem) => void;
}

export default function PortfolioCarousel({
  onLearnMore,
}: PortfolioCarouselProps) {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  // Fades the whole section in the first time it scrolls into view. It never
  // re-runs, so it cannot fight the carousel's own horizontal scroll.
  const sectionRef = useReveal<HTMLElement>();

  function scrollBy(amount: number) {
    // Scroll the track itself instead of translating it: the native
    // scrollLeft engine keeps touch, trackpad, scrollbar and keyboard
    // behavior for free, and CSS snap still settles the final position.
    // 320px is wider than a card (260px mobile / 300px desktop) so the
    // next slide lands fully visible rather than half-cut.
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
    // `aria-labelledby` points at the wrapper, not the <h2>: SectionTitle
    // renders the heading without an id prop, and assistive tech reads the
    // accessible name from the referenced subtree's text content.
    <section ref={sectionRef} aria-labelledby="portfolio-heading">
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
        // Scroll width and snap are declared in CSS so the same track works
        // for touch, trackpad and the arrow buttons. `.no-scrollbar` hides
        // the bar without disabling scrolling.
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
