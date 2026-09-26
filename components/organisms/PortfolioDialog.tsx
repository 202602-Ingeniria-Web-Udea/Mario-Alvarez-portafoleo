// Project details dialog opened from a portfolio card.
"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { ProjectItem } from "@/data/profile";
import { DateBadge } from "@/components/atoms/DateBadge";
import { YellowButton } from "@/components/atoms/YellowButton";
import { CloseIcon } from "@/components/icons";
import { useLanguage } from "@/lib/LanguageContext";

interface PortfolioDialogProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function PortfolioDialog({
  project,
  onClose,
}: PortfolioDialogProps) {
  const { t } = useLanguage();

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!project) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} ${t.portfolio.details}`}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden bg-white shadow-lg dark:bg-neutral-800"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={project.image}
          alt={`${project.title} cover`}
          width={600}
          height={400}
          className="h-52 w-full object-cover"
        />
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DateBadge>{project.tag}</DateBadge>
              <h2 className="mt-3 text-xl font-bold text-ink dark:text-neutral-100">
                {project.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.portfolio.closeDialog}
              className="rounded-full p-2 text-ink hover:bg-page dark:text-neutral-100 dark:hover:bg-neutral-700"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted dark:text-neutral-400">
            {project.details}
          </p>
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md px-4 py-2 text-sm font-semibold text-muted hover:bg-page dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              {t.close}
            </button>
            <YellowButton href={project.githubUrl}>{t.viewCode}</YellowButton>
          </div>
        </div>
      </div>
    </div>
  );
}
