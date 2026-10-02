import { EXTERNAL_LINK_PROPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export enum ButtonVariant {
  Primary = "primary",
  Outline = "outline",
}

export enum ButtonSize {
  Md = "md",
  Lg = "lg",
}

export const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-500 ease-editorial focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  [ButtonVariant.Primary]:
    "bg-brand-strong text-on-brand hover:-translate-y-0.5 hover:shadow-cta",
  [ButtonVariant.Outline]: "border border-line text-heading hover:border-brand hover:text-brand-strong",
};

export const BUTTON_SIZES: Record<ButtonSize, string> = {
  [ButtonSize.Md]: "px-5 py-2.5 text-sm",
  [ButtonSize.Lg]: "px-8 py-4 text-base",
};

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  variant = ButtonVariant.Primary,
  size = ButtonSize.Md,
  external = false,
  className,
  onClick,
  children,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? EXTERNAL_LINK_PROPS : {})}
      className={cn(BUTTON_BASE, BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className)}
    >
      {children}
    </a>
  );
}
