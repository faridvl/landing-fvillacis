"use client";

import { useEffect } from "react";
import { REVEAL } from "@/lib/motion";

// Un solo observer para toda la página: los Reveal quedan como HTML sin hidratar.
export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: REVEAL.rootMargin },
    );
    document.querySelectorAll("[data-reveal]:not([data-revealed])").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
