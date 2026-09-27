// Contact dialog opened from the hero "Hire me" button.
// Reuses the ProgressBar and SkillBullet atoms for a skills summary,
// so every atom is shared by more than two places.
"use client";

import { useEffect } from "react";
import { profile } from "@/data/profile";
import { ProgressBar } from "@/components/atoms/ProgressBar";
import { SkillBullet } from "@/components/atoms/SkillBullet";
import { YellowButton } from "@/components/atoms/YellowButton";
import { CloseIcon } from "@/components/icons";
import { useLanguage } from "@/lib/LanguageContext";

interface ProfileDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ProfileDialog({ open, onClose }: ProfileDialogProps) {
  const { t } = useLanguage();

  // Close on Escape for keyboard users.
  // Bound to `window`, not to the panel: the dialog has no focus trap yet,
  // so the focused element may be anywhere in the document. The effect is
  // gated on `open` and cleaned up so a closed dialog stops listening.
  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Returned after the hooks on purpose: the early exit must not skip
  // hook calls, otherwise toggling the dialog would change the hook count.
  if (!open) return null;

  return (
    // Known limitation: no focus trap, no focus restore and no background
    // scroll lock. Tracked in README "Límites conocidos".
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={t.profileDialog.title}
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-md overflow-y-auto bg-white p-6 shadow-lg dark:bg-neutral-800"
        // Click-to-close lives on the backdrop only; the panel swallows the
        // click so selecting text or pressing a button inside does not close.
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-ink dark:text-neutral-100">
              {profile.name}
            </h2>
            <p className="text-sm text-muted dark:text-neutral-400">{t.role}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.profileDialog.closeDialog}
            className="rounded-full p-2 text-ink hover:bg-page dark:text-neutral-100 dark:hover:bg-neutral-700"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted dark:text-neutral-400">
          {t.bio}
        </p>
        <p className="mt-3 text-sm text-ink dark:text-neutral-200">
          {t.profileDialog.emailLabel}:{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-semibold text-brand-600 hover:underline"
          >
            {profile.email}
          </a>
        </p>

        {/* Skills summary reusing the sidebar atoms. */}
        <h3 className="mt-5 text-base font-semibold text-ink dark:text-neutral-100">
          {t.profileDialog.topSkills}
        </h3>
        <div className="mt-3 space-y-3">
          {profile.programming.slice(0, 3).map((skill) => (
            <ProgressBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>
        <ul className="mt-4 space-y-2">
          {profile.extraSkills.slice(0, 3).map((skill) => (
            <SkillBullet key={skill}>
              {t.extraSkillNames[skill] ?? skill}
            </SkillBullet>
          ))}
        </ul>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-4 py-2 text-sm font-semibold text-muted hover:bg-page dark:text-neutral-400 dark:hover:bg-neutral-700"
          >
            {t.close}
          </button>
          <YellowButton href={`mailto:${profile.email}`}>
            {t.hireMe}
          </YellowButton>
        </div>
      </div>
    </div>
  );
}
