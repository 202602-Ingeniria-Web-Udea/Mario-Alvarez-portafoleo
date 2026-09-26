// Hero banner: greeting, name, role, bio CTA, and profile photo.
"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { YellowButton } from "@/components/atoms/YellowButton";
import { useLanguage } from "@/lib/LanguageContext";

interface HeroProps {
  onHire: () => void;
}

export default function Hero({ onHire }: HeroProps) {
  const { t } = useLanguage();
  return (
    <section className="grid items-center gap-6 bg-white p-6 shadow-sm dark:bg-neutral-800 sm:p-10 md:grid-cols-[1fr_280px]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          {t.heroGreeting}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-ink dark:text-neutral-100 sm:text-4xl">
          {profile.nameLead}{" "}
          <span className="text-brand-400">{profile.nameAccent}</span>
        </h1>
        <p className="mt-2 text-base font-medium text-ink dark:text-neutral-200">
          {t.role}
        </p>
        <p className="mt-4 max-w-[420px] text-sm leading-relaxed text-muted dark:text-neutral-400">
          {t.bio}
        </p>
        <div className="mt-6">
          <YellowButton onClick={onHire}>{t.hireMe}</YellowButton>
        </div>
      </div>
      <div className="mx-auto">
        <Image
          src={profile.photo}
          alt={`${profile.name} portrait`}
          width={280}
          height={320}
          className="h-[320px] w-[280px] object-cover"
          priority
        />
      </div>
    </section>
  );
}
