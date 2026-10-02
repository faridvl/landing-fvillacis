import {
  CodeXml,
  Gauge,
  Images,
  KeyRound,
  LayoutTemplate,
  MessageCircle,
  Printer,
  ShoppingBag,
  QrCode,
  RefreshCw,
  ScanLine,
  Search,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

// Valores válidos para el campo "icon" de los JSON.
export const ICONS = {
  "qr-code": QrCode,
  layout: LayoutTemplate,
  code: CodeXml,
  gallery: Images,
  cart: ShoppingBag,
  scan: ScanLine,
  refresh: RefreshCw,
  message: MessageCircle,
  printer: Printer,
  gauge: Gauge,
  smartphone: Smartphone,
  search: Search,
  key: KeyRound,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;
