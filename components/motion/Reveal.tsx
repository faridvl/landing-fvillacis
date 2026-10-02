import type { CSSProperties, ReactNode } from "react";

export enum RevealVariant {
  Default = "",
  Strong = "strong",
}

interface RevealProps {
  children: ReactNode;
  as?: "div" | "li" | "article";
  className?: string;
  delay?: number;
  strong?: boolean;
}

export function Reveal({ children, as: Element = "div", className, delay = 0, strong = false }: RevealProps) {
  const style = delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined;
  return (
    <Element data-reveal={strong ? RevealVariant.Strong : RevealVariant.Default} className={className} style={style}>
      {children}
    </Element>
  );
}
