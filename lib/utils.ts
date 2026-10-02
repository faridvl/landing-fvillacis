import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WHATSAPP_BASE_URL } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** `phone` en formato internacional sin "+". */
export function buildWhatsappUrl(phone: string, message?: string): string {
  const base = `${WHATSAPP_BASE_URL}/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function formatPrice(amount: number, currency: string, locale: string): string {
  return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
}

export function displayDomain(url: string): string {
  return new URL(url).hostname.replace(/^www\./, "");
}

export function toAnchor(target: string): string {
  return `#${target}`;
}

export function padStep(index: number): string {
  return String(index + 1).padStart(2, "0");
}
