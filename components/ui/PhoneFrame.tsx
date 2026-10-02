import { cn } from "@/lib/utils";

export function PhoneFrame({ children, className, label }: { children: React.ReactNode; className?: string; label: string }) {
  return (
    <figure
      aria-label={label}
      className={cn(
        "relative mx-auto w-full max-w-[320px] rounded-[2.75rem] border-[10px] border-ink bg-ink shadow-frame",
        className,
      )}
    >
      <span aria-hidden="true" className="absolute top-2 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
      <div className="h-[600px] overflow-hidden rounded-[2rem] bg-surface">{children}</div>
    </figure>
  );
}
