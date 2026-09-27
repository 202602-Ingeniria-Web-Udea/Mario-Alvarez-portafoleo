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
//
// The provider and the content are separate components on purpose: the
// provider stays the smallest possible client boundary so it can wrap
// server-rendered children later without the state moving.
export default function HomePage() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

function HomeContent() {
  // Both dialogs are owned here, at the level that renders their triggers:
  // Hero opens the contact dialog and PortfolioCarousel opens a project
  // dialog, so lifting the state avoids prop-drilling a shared boolean
  // through the center column. `null` encodes "no project selected", which
  // doubles as the closed state for the project dialog.
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    // The four page-load blocks below fade in with small incremental delays
    // so the page assembles instead of appearing at once. Two properties make
    // this safe: it is pure CSS (no JS decides whether the content shows) and
    // `animate-fade-*` collapses to `animation: none` under reduced motion,
    // where the blocks just render in their normal state.
    <div className="min-h-screen">
      {/* Mobile header: visible only when the fixed rails are hidden. */}
      <header
        className="sticky top-0 z-30 flex items-center justify-between bg-white/95 px-4 py-3 shadow-sm backdrop-blur animate-fade-in dark:bg-neutral-800/95 lg:hidden"
        // The 0ms is explicit so the 0/80/160/240 sequence reads in one place.
        style={{ animationDelay: "0ms" }}
      >
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
        {/* Left fixed sidebar (desktop only). `sticky` + a viewport-bounded
            max-height keeps it scrollable without covering the page flow. */}
        <aside
          className="hidden w-[280px] shrink-0 animate-fade-in lg:block"
          style={{ animationDelay: "80ms" }}
        >
          <div className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto">
            <LeftSidebar />
          </div>
        </aside>

        {/* Center scrollable column. */}
        <main className="w-full min-w-0 max-w-[850px] space-y-8">
          {/* The wrapper exists only to carry the entrance class on the hero;
              `space-y-8` on <main> still spaces it exactly like a sibling. */}
          <div className="animate-fade-in" style={{ animationDelay: "160ms" }}>
            <Hero onHire={() => setProfileOpen(true)} />
          </div>
          <KnowledgeGrid />
          <EducationList />
          <PortfolioCarousel onLearnMore={setActiveProject} />
          <Footer />
        </main>

        {/* Right fixed social rail (desktop only). */}
        <aside
          className="hidden w-[80px] shrink-0 animate-fade-in lg:block"
          style={{ animationDelay: "240ms" }}
        >
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
