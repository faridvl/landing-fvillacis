export enum Locale {
  Es = "es",
}

export const DEFAULT_LOCALE = Locale.Es;

export function interpolate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
