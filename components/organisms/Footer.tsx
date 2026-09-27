// Page footer with copyright and social links.
"use client";

import { profile } from "@/data/profile";
import { SocialButton } from "@/components/atoms/SocialButton";
import { useReveal } from "@/lib/useReveal";

export default function Footer() {
  // Fades the footer in the first time it scrolls into view. Without JS the
  // `data-reveal` attribute is never written, so the footer renders visible.
  const footerRef = useReveal<HTMLElement>();
  return (
    <footer
      ref={footerRef}
      className="bg-white p-6 text-center shadow-sm dark:bg-neutral-800"
    >
      <div className="flex items-center justify-center gap-2">
        {profile.socials.slice(0, 3).map((social) => (
          <SocialButton
            key={social.label}
            label={social.label}
            href={social.href}
            icon={social.icon}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-muted dark:text-neutral-400">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
