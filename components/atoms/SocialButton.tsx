// Small circular link button for a social profile.
import {
  DribbbleIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "@/components/icons";

interface SocialButtonProps {
  label: string;
  href: string;
  icon: string;
}

function iconFor(name: string) {
  switch (name) {
    case "github":
      return GithubIcon;
    case "linkedin":
      return LinkedinIcon;
    case "twitter":
      return TwitterIcon;
    case "dribbble":
      return DribbbleIcon;
    case "instagram":
      return InstagramIcon;
    case "facebook":
      return FacebookIcon;
    case "mail":
      return MailIcon;
    default:
      return GithubIcon;
  }
}

export function SocialButton({ label, href, icon }: SocialButtonProps) {
  const Icon = iconFor(icon);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-ink transition hover:bg-brand-400 hover:text-white dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-brand-400 dark:hover:text-white"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
