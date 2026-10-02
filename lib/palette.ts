import themeJson from "@/content/theme.json";

/* OKLCH es perceptualmente uniforme: con L y C fijos por rol, el contraste
   se mantiene igual para cualquier matiz base. */

export enum Harmony {
  Complementary = "complementary",
  SplitComplementary = "split-complementary",
  Triadic = "triadic",
  Analogous = "analogous",
}

const HARMONY_OFFSET: Record<Harmony, number> = {
  [Harmony.Complementary]: 180,
  [Harmony.SplitComplementary]: 150,
  [Harmony.Triadic]: 120,
  [Harmony.Analogous]: 30,
};

enum HueSource {
  Base = "base",
  Accent = "accent",
}

interface Tone {
  /** Luminosidad OKLCH, 0–1. */
  l: number;
  /** Croma OKLCH (saturación perceptual). */
  c: number;
  hue: HueSource;
}

// L elegidas para cumplir WCAG AA (≥ 4.5:1) en todos los matices.
const TONES = {
  ink: { l: 0.2, c: 0.018, hue: HueSource.Base },
  "ink-soft": { l: 0.26, c: 0.022, hue: HueSource.Base },
  heading: { l: 0.22, c: 0.02, hue: HueSource.Base },
  body: { l: 0.44, c: 0.02, hue: HueSource.Base },
  line: { l: 0.9, c: 0.012, hue: HueSource.Base },
  "body-on-dark": { l: 0.8, c: 0.018, hue: HueSource.Base },
  "line-on-dark": { l: 0.34, c: 0.02, hue: HueSource.Base },
  "surface-muted": { l: 0.965, c: 0.01, hue: HueSource.Base },
  surface: { l: 0.99, c: 0.004, hue: HueSource.Base },
  brand: { l: 0.66, c: 0.15, hue: HueSource.Base },
  "brand-strong": { l: 0.5, c: 0.13, hue: HueSource.Base },
  "brand-light": { l: 0.82, c: 0.1, hue: HueSource.Base },
  accent: { l: 0.62, c: 0.12, hue: HueSource.Accent },
  "accent-strong": { l: 0.48, c: 0.11, hue: HueSource.Accent },
} satisfies Record<string, Tone>;

export type PaletteRole = keyof typeof TONES;

export const WHATSAPP_COLOR = "#25d366";

interface ThemeConfig {
  hue: number;
  harmony: Harmony;
}

export const theme = themeJson as ThemeConfig;

const FULL_TURN = 360;

function resolveHue(source: HueSource, { hue, harmony }: ThemeConfig): number {
  return source === HueSource.Base ? hue : (hue + HARMONY_OFFSET[harmony]) % FULL_TURN;
}

function roles(): PaletteRole[] {
  return Object.keys(TONES) as PaletteRole[];
}

export function paletteCssVars(config: ThemeConfig = theme): Record<string, string> {
  const vars: Record<string, string> = { "--palette-whatsapp": WHATSAPP_COLOR };
  for (const role of roles()) {
    const tone: Tone = TONES[role];
    vars[`--palette-${role}`] = `oklch(${tone.l} ${tone.c} ${resolveHue(tone.hue, config)})`;
  }
  return vars;
}

const DEG_TO_RAD = Math.PI / 180;

function linearToSrgb(x: number): number {
  const v = x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
  return Math.round(Math.min(1, Math.max(0, v)) * 255);
}

export function oklchToHex(l: number, c: number, h: number): string {
  const a = c * Math.cos(h * DEG_TO_RAD);
  const b = c * Math.sin(h * DEG_TO_RAD);
  const l_ = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m_ = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s_ = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const rgb = [
    4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
    -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
    -0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_,
  ];
  return `#${rgb.map((x) => linearToSrgb(x).toString(16).padStart(2, "0")).join("")}`;
}

export function paletteHex(config: ThemeConfig = theme): Record<PaletteRole, string> {
  return Object.fromEntries(
    roles().map((role) => {
      const tone: Tone = TONES[role];
      return [role, oklchToHex(tone.l, tone.c, resolveHue(tone.hue, config))];
    }),
  ) as Record<PaletteRole, string>;
}
