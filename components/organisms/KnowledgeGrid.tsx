// "My Knowledge" grid of service cards.
"use client";

import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { KnowledgeCard } from "@/components/molecules/KnowledgeCard";
import { useLanguage } from "@/lib/LanguageContext";
import { useReveal } from "@/lib/useReveal";

export default function KnowledgeGrid() {
  const { t } = useLanguage();
  // Fades the whole section in the first time it scrolls into view.
  const sectionRef = useReveal<HTMLElement>();
  return (
    <section ref={sectionRef} aria-labelledby="knowledge-heading">
      <div id="knowledge-heading">
        <SectionTitle
          title={t.knowledge.title}
          subtitle={t.knowledge.subtitle}
        />
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {profile.knowledge.map((entry, index) => (
          <KnowledgeCard
            key={t.knowledge.items[index]?.title ?? entry.icon}
            item={{
              icon: entry.icon,
              title: t.knowledge.items[index]?.title ?? "",
              description: t.knowledge.items[index]?.description ?? "",
            }}
          />
        ))}
      </div>
    </section>
  );
}
