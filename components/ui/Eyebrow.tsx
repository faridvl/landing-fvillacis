import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  centered = false,
  className,
}: {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-6 flex items-center gap-3", centered && "justify-center", className)}>
      <span aria-hidden="true" className="h-px w-8 bg-brand" />
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-strong">{children}</span>
      {centered && <span aria-hidden="true" className="h-px w-8 bg-brand" />}
    </div>
  );
}
