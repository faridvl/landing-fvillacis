import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { SectionIntro } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
}: SectionIntro & { centered?: boolean; className?: string }) {
  return (
    <Reveal className={cn("mb-14 max-w-2xl lg:mb-16", centered && "mx-auto text-center", className)}>
      <Eyebrow centered={centered}>{eyebrow}</Eyebrow>
      <h2 className="mb-5 text-4xl font-bold leading-tight text-pretty lg:text-5xl">{title}</h2>
      {subtitle && <p className="text-lg leading-relaxed text-pretty">{subtitle}</p>}
    </Reveal>
  );
}
