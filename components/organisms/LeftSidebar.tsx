// Left profile sidebar: photo, contact rows, skill bars, CV button.
"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { ProgressBar } from "@/components/atoms/ProgressBar";
import { SkillBullet } from "@/components/atoms/SkillBullet";
import { SocialButton } from "@/components/atoms/SocialButton";
import { YellowButton } from "@/components/atoms/YellowButton";
import { useLanguage } from "@/lib/LanguageContext";

interface LeftSidebarProps {
  compact?: boolean;
}

export default function LeftSidebar({ compact = false }: LeftSidebarProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white p-6 shadow-sm dark:bg-neutral-800">
      {/* Photo + identity header. */}
      <div className="text-center">
        <Image
          src={profile.photo}
          alt={`${profile.name} profile photo`}
          width={150}
          height={150}
          className="mx-auto h-[150px] w-[150px] rounded-full object-cover"
          priority={!compact}
        />
        <h2 className="mt-4 text-lg font-semibold text-ink dark:text-neutral-100">
          {profile.name}
        </h2>
        <p className="text-sm text-muted dark:text-neutral-400">{t.role}</p>
        <div className="mt-3 flex items-center justify-center gap-2">
          {profile.socials.map((social) => (
            <SocialButton
              key={social.label}
              label={social.label}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
      </div>

      <hr className="my-5 border-page dark:border-neutral-700" />

      {/* Contact rows. */}
      <dl className="space-y-2 text-sm">
        {profile.contact.map((row) => (
          <div key={row.id} className="flex items-center justify-between gap-2">
            <dt className="shrink-0 bg-brand-400 px-2 py-0.5 font-medium text-ink">
              {t.contactLabels[row.id]}
            </dt>
            <dd
              className={
                row.accent
                  ? "text-green-600 dark:text-green-400"
                  : "break-all text-muted dark:text-neutral-400"
              }
            >
              {row.id === "freelance" ? t.available : row.value}
            </dd>
          </div>
        ))}
      </dl>

      <hr className="my-5 border-page dark:border-neutral-700" />

      {/* Language bars. */}
      <section aria-label={t.sidebarSections.languages}>
        <h3 className="text-base font-semibold text-ink dark:text-neutral-100">
          {t.sidebarSections.languages}
        </h3>
        <div className="mt-3 space-y-3">
          {profile.languages.map((skill) => (
            <ProgressBar
              key={skill.id}
              name={t.languageNames[skill.id] ?? skill.id}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <hr className="my-5 border-page dark:border-neutral-700" />

      {/* Programming bars. */}
      <section aria-label={t.sidebarSections.skills}>
        <h3 className="text-base font-semibold text-ink dark:text-neutral-100">
          {t.sidebarSections.skills}
        </h3>
        <div className="mt-3 space-y-3">
          {profile.programming.map((skill) => (
            <ProgressBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <hr className="my-5 border-page dark:border-neutral-700" />

      {/* Extra skills list. */}
      <section aria-label={t.sidebarSections.extraSkills}>
        <h3 className="text-base font-semibold text-ink dark:text-neutral-100">
          {t.sidebarSections.extraSkills}
        </h3>
        <ul className="mt-3 space-y-2">
          {profile.extraSkills.map((skill) => (
            <SkillBullet key={skill}>
              {t.extraSkillNames[skill] ?? skill}
            </SkillBullet>
          ))}
        </ul>
      </section>

      <hr className="my-5 border-page dark:border-neutral-700" />

      {/* CV download action: fetches the static PDF from `public/`. */}
      <YellowButton href={profile.cvFile} download>
        {t.downloadCV}
      </YellowButton>
    </div>
  );
}
