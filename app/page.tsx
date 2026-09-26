"use client";

import { useState } from "react";
import { profile, type ProjectItem } from "@/data/profile";
import LeftSidebar from "@/components/organisms/LeftSidebar";
import RightRail from "@/components/organisms/RightRail";
import Hero from "@/components/organisms/Hero";
import KnowledgeGrid from "@/components/organisms/KnowledgeGrid";
import EducationList from "@/components/organisms/EducationList";
import PortfolioCarousel from "@/components/organisms/PortfolioCarousel";
import Footer from "@/components/organisms/Footer";
import ProfileDialog from "@/components/organisms/ProfileDialog";
import PortfolioDialog from "@/components/organisms/PortfolioDialog";
import { SocialButton } from "@/components/atoms/SocialButton";
import { LanguageToggle } from "@/components/atoms/LanguageToggle";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { LanguageProvider } from "@/lib/LanguageContext";

// Single-page portfolio: fixed left sidebar, scrollable center,
// fixed right social rail (rails collapse on small screens).
export default function HomePage() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

function HomeContent() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen">
      {/* Mobile header: visible only when the fixed rails are hidden. */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-white/95 px-4 py-3 shadow-sm backdrop-blur dark:bg-neutral-800/95 lg:hidden">
        <p className="text-sm font-bold text-ink dark:text-neutral-100">
          {profile.name}
        </p>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          {profile.socials.slice(0, 3).map((social) => (
            <SocialButton
              key={social.label}
              label={social.label}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] justify-center gap-6 px-4 py-6 lg:px-6">
        {/* Left fixed sidebar (desktop only). */}
        <aside className="hidden w-[280px] shrink-0 lg:block">
          <div className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto">
            <LeftSidebar />
          </div>
        </aside>

        {/* Center scrollable column. */}
        <main className="w-full min-w-0 max-w-[850px] space-y-8">
          <Hero onHire={() => setProfileOpen(true)} />
          <KnowledgeGrid />
          <EducationList />
          <PortfolioCarousel onLearnMore={setActiveProject} />
          <Footer />
        </main>

        {/* Right fixed social rail (desktop only). */}
        <aside className="hidden w-[80px] shrink-0 lg:block">
          <div className="sticky top-6">
            <RightRail />
          </div>
        </aside>
      </div>

      {/* Mobile contact summary (replaces the hidden left sidebar). */}
      <section className="px-4 pb-10 lg:hidden">
        <LeftSidebar compact />
      </section>

      {/* Dialogs: profile contact + portfolio details. */}
      <ProfileDialog open={profileOpen} onClose={() => setProfileOpen(false)} />
      <PortfolioDialog
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
