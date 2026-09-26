// Extra-skill line with a small diamond marker.
import { DiamondIcon } from "@/components/icons";

interface SkillBulletProps {
  children: React.ReactNode;
}

export function SkillBullet({ children }: SkillBulletProps) {
  return (
    <li className="flex items-center gap-2 text-sm text-muted dark:text-neutral-400">
      <DiamondIcon className="h-3.5 w-3.5 shrink-0 text-brand-400" />
      <span>{children}</span>
    </li>
  );
}
