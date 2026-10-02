import { EXTERNAL_LINK_PROPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PulseLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      {...EXTERNAL_LINK_PROPS}
      className={cn("cta-pulse hover:-translate-y-0.75 hover:scale-[1.045] active:scale-[0.98]", className)}
    >
      {children}
    </a>
  );
}
