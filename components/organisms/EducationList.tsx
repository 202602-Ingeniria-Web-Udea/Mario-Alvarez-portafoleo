// "Education" list of school entries.
"use client";

import { profile } from "@/data/profile";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { EducationRow } from "@/components/molecules/EducationRow";
import { useLanguage } from "@/lib/LanguageContext";

export default function EducationList() {
  const { t } = useLanguage();
  return (
    <section aria-labelledby="education-heading">
      <div id="education-heading">
        <SectionTitle
          title={t.education.title}
          subtitle={t.education.subtitle}
        />
      </div>
      <div className="mt-6 space-y-5">
        {profile.education.map((entry, index) => (
          <EducationRow
            key={`${entry.school}-${entry.period}`}
            item={{
              school: entry.school,
              role: t.education.items[index]?.role ?? "",
              period: entry.period,
              certificate: t.education.items[index]?.certificate,
              description: t.education.items[index]?.description ?? "",
            }}
          />
        ))}
      </div>
    </section>
  );
}
