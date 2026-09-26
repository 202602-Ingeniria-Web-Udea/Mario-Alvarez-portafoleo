// Card for a single knowledge/service item.
import type { KnowledgeItem } from "@/data/profile";
import {
  CodeIcon,
  GameIcon,
  IllustrationIcon,
  PhotoIcon,
  SeoIcon,
  WebIcon,
} from "@/components/icons";

interface KnowledgeCardProps {
  item: KnowledgeItem;
}

function iconFor(kind: KnowledgeItem["icon"]) {
  switch (kind) {
    case "code":
      return CodeIcon;
    case "illustration":
      return IllustrationIcon;
    case "web":
      return WebIcon;
    case "photo":
      return PhotoIcon;
    case "game":
      return GameIcon;
    case "seo":
      return SeoIcon;
  }
}

export function KnowledgeCard({ item }: KnowledgeCardProps) {
  const Icon = iconFor(item.icon);
  return (
    <article className="flex flex-col items-center bg-white p-6 text-center shadow-sm dark:bg-neutral-800">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-neutral-700 dark:text-brand-400">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-ink dark:text-neutral-100">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted dark:text-neutral-400">
        {item.description}
      </p>
    </article>
  );
}
