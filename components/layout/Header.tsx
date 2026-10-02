"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink, ButtonSize, ButtonVariant } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { Wordmark } from "@/components/ui/Wordmark";
import { SectionId } from "@/lib/constants";
import type { CommonContent } from "@/lib/types";
import { cn, toAnchor } from "@/lib/utils";

const SOLID_AFTER_PX = 24;

interface HeaderProps {
  brandName: string;
  navigation: CommonContent["navigation"];
  ui: CommonContent["ui"];
  ctaHref: string;
}

export function Header({ brandName, navigation, ui, ctaHref }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > SOLID_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const isSolid = solid || menuOpen;

  return (
    <header
      className={cn(
        "dark-section fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial",
        isSolid ? "border-b border-line bg-ink/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <a href={toAnchor(SectionId.Hero)} className="text-heading">
          <Wordmark name={brandName} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.items.map((item) => (
            <a
              key={item.target}
              href={toAnchor(item.target)}
              className="text-sm font-medium text-body transition-colors hover:text-heading"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={ctaHref} external size={ButtonSize.Md} className="hidden sm:inline-flex">
            <WhatsappIcon className="size-4" />
            {navigation.cta.label}
          </ButtonLink>
          <button
            type="button"
            className="p-2 text-heading md:hidden"
            aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-editorial md:hidden",
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col pb-6">
            {navigation.items.map((item) => (
              <a
                key={item.target}
                href={toAnchor(item.target)}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="border-b border-line py-3 text-sm font-medium text-body"
              >
                {item.label}
              </a>
            ))}
            <ButtonLink
              href={ctaHref}
              external
              size={ButtonSize.Lg}
              variant={ButtonVariant.Primary}
              onClick={closeMenu}
              className="mt-5"
            >
              <WhatsappIcon className="size-5" />
              {navigation.cta.label}
            </ButtonLink>
          </Container>
        </div>
      </div>
    </header>
  );
}
