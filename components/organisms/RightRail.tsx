// Fixed right rail: theme/language toggles on top, vertical social
// links below (desktop only).
"use client";

import { profile } from "@/data/profile";
import { SocialButton } from "@/components/atoms/SocialButton";
import { LanguageToggle } from "@/components/atoms/LanguageToggle";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { useLanguage } from "@/lib/LanguageContext";

export default function RightRail() {
  const { t } = useLanguage();
  return (
    <nav
      aria-label="Social links"
      className="flex flex-col items-center gap-3 bg-white py-6 shadow-sm dark:bg-neutral-800"
    >
      <ThemeToggle />
      <LanguageToggle />
      <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted [writing-mode:vertical-rl] dark:text-neutral-400">
        {t.follow}
      </span>
      {profile.socials.map((social) => (
        <SocialButton
          key={social.label}
          label={social.label}
          href={social.href}
          icon={social.icon}
        />
      ))}
    </nav>
  );
}
