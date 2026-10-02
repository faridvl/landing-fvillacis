import { BRAND_MARK } from "@/lib/brand-mark";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox={BRAND_MARK.viewBox} aria-hidden="true" className={cn("shrink-0", className)}>
      <rect width={BRAND_MARK.size} height={BRAND_MARK.size} rx={BRAND_MARK.tileRadius} className="fill-brand-strong" />
      <path d={BRAND_MARK.letters} className="fill-on-brand" />
    </svg>
  );
}
