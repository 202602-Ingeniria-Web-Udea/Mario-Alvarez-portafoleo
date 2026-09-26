// Labeled skill bar with a yellow fill track.
interface ProgressBarProps {
  name: string;
  level: number; // 0-100
}

export function ProgressBar({ name, level }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, level));
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted dark:text-neutral-400">{name}</span>
        <span className="text-muted dark:text-neutral-400">{clamped}%</span>
      </div>
      <div
        className="mt-1 h-[6px] overflow-hidden rounded-full border border-brand-400/60 p-[2px]"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} skill level`}
      >
        <div
          className="h-full rounded-full bg-brand-400"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
