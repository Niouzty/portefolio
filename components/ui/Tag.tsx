import { cn } from "../../lib/utils/cn";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/80 transition duration-200 hover:-translate-y-0.5 hover:shadow-card hover:border-white/20",
        className
      )}
    >
      {children}
    </span>
  );
}
