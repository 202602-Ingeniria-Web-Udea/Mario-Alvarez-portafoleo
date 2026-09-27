// Primary yellow call-to-action button with an arrow icon.
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

interface YellowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  // Marks the anchor as a file download instead of a navigation. Only honored
  // for same-origin hrefs, so use it for files served from `public/`.
  download?: boolean;
  type?: "button" | "submit";
}

export function YellowButton({
  children,
  onClick,
  href,
  download = false,
  type = "button",
}: YellowButtonProps) {
  const classes =
    "inline-flex items-center gap-2 rounded-md bg-brand-400 px-6 py-3 text-sm font-semibold uppercase text-ink transition hover:bg-brand-500";
  const label = (
    <>
      {children}
      <ArrowRightIcon className="h-4 w-4" />
    </>
  );
  if (href) {
    // Two real elements instead of one with a role: an <a> keeps native
    // link semantics (middle click, copy address, navigation) and a
    // <button> keeps native activation (Enter/Space). Rendering an <a> for
    // actions, or a <button> with role="link", would break one of them.
    return (
      // `undefined` (not `false`) keeps the attribute off the DOM for
      // navigation links, since any value makes the browser download.
      <a
        href={href}
        onClick={onClick}
        className={classes}
        download={download || undefined}
      >
        {label}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {label}
    </button>
  );
}
