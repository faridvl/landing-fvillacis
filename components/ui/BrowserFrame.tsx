import { cn } from "@/lib/utils";

export function BrowserFrame({ domain, className, children }: { domain: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line bg-surface shadow-card", className)}>
      <div className="flex items-center gap-3 border-b border-line bg-surface-muted px-4 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </span>
        <span className="truncate rounded-full bg-surface px-3 py-0.5 text-xs text-body/70">{domain}</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">{children}</div>
    </div>
  );
}
