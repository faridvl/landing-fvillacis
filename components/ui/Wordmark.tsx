import { BrandMark } from "@/components/ui/BrandMark";
import { cn } from "@/lib/utils";

export function Wordmark({ name, className }: { name: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-heading", className)}>
      <BrandMark className="size-8" />
      {name}
    </span>
  );
}
