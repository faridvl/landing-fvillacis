import type { SectionId } from "@/lib/constants";
import { cn } from "@/lib/utils";

export enum SectionTone {
  Light = "light",
  Muted = "muted",
  Dark = "dark",
}

const TONE_CLASSES: Record<SectionTone, string> = {
  [SectionTone.Light]: "bg-surface text-body",
  [SectionTone.Muted]: "bg-surface-muted text-body",
  [SectionTone.Dark]: "dark-section bg-ink text-body",
};

interface SectionProps {
  id: SectionId;
  tone?: SectionTone;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, tone = SectionTone.Light, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-20 py-20 lg:py-28", TONE_CLASSES[tone], className)}>
      {children}
    </section>
  );
}
