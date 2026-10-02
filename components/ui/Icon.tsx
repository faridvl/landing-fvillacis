import { ICONS, type IconName } from "@/lib/icons";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = ICONS[name];
  return <Component aria-hidden="true" className={className} strokeWidth={1.75} />;
}
