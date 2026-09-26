// Small yellow pill for dates and tags.
interface DateBadgeProps {
  children: React.ReactNode;
}

export function DateBadge({ children }: DateBadgeProps) {
  return (
    <span className="inline-block rounded bg-brand-400 px-3 py-1 text-xs font-medium text-white">
      {children}
    </span>
  );
}
