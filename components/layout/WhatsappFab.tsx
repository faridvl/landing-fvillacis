import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { EXTERNAL_LINK_PROPS } from "@/lib/constants";

export function WhatsappFab({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      {...EXTERNAL_LINK_PROPS}
      aria-label={label}
      className="fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-whatsapp transition-transform duration-500 ease-editorial hover:scale-110"
    >
      <WhatsappIcon className="size-7" />
    </a>
  );
}
