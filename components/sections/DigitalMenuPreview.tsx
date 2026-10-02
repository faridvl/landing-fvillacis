import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import type { MenuDemoContent } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface DigitalMenuPreviewProps {
  menu: MenuDemoContent;
  currency: string;
  locale: string;
}

// Decorativa: sin headings para no alterar el esquema de títulos de la página.
export function DigitalMenuPreview({ menu, currency, locale }: DigitalMenuPreviewProps) {
  return (
    <div className="flex h-full flex-col text-left">
      <div className="bg-brand-strong px-5 pt-10 pb-5 text-on-brand">
        <p className="font-display text-lg font-bold">{menu.venue}</p>
        <p className="text-xs text-on-brand/75">{menu.venueNote}</p>
      </div>

      <div className="flex gap-2 overflow-hidden border-b border-line px-5 py-3">
        {menu.categories.map((category, i) => (
          <span
            key={category.name}
            className={
              i === 0
                ? "rounded-full bg-ink px-3 py-1 text-xs font-medium text-surface"
                : "rounded-full bg-surface-muted px-3 py-1 text-xs font-medium"
            }
          >
            {category.name}
          </span>
        ))}
      </div>

      <div className="flex-1 space-y-5 overflow-hidden px-5 py-4">
        {menu.categories.map((category) => (
          <div key={category.name}>
            <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-body/70 uppercase">{category.name}</p>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li key={item.name} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-heading">
                      {item.name}
                      {item.highlight && (
                        <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 align-middle text-[10px] font-semibold text-accent-strong">
                          {menu.highlightLabel}
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-body/70">{item.description}</p>
                  </div>
                  <p className="shrink-0 text-sm font-semibold text-heading">{formatPrice(item.price, currency, locale)}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-4">
        <span className="flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 text-sm font-semibold text-white">
          <WhatsappIcon className="size-4" />
          {menu.orderLabel}
        </span>
      </div>
    </div>
  );
}
