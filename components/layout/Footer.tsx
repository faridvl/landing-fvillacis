import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Wordmark } from "@/components/ui/Wordmark";
import { EXTERNAL_LINK_PROPS, SOCIAL_NETWORK_LABELS, SectionId } from "@/lib/constants";
import { interpolate } from "@/lib/i18n";
import type { CommonContent, SiteConfig, Solution } from "@/lib/types";
import { toAnchor } from "@/lib/utils";

interface FooterProps {
  site: SiteConfig;
  common: CommonContent;
  solutions: Solution[];
  whatsappHref: string;
}

export function Footer({ site, common, solutions, whatsappHref }: FooterProps) {
  const profiles = site.social.filter((profile) => profile.url);
  const linkClass = "text-sm text-body transition-colors hover:text-heading";

  return (
    <footer className="dark-section bg-ink text-body">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Wordmark name={site.name} className="mb-4" />
          <p className="mb-6 max-w-sm text-sm leading-relaxed text-body">{common.description}</p>
          {profiles.length > 0 && (
            <ul className="flex gap-3">
              {profiles.map((profile) => {
                const label = interpolate(common.ui.socialLabel, { network: SOCIAL_NETWORK_LABELS[profile.network] });
                return (
                  <li key={profile.network}>
                    <a
                      href={profile.url}
                      {...EXTERNAL_LINK_PROPS}
                      aria-label={label}
                      className="flex size-9 items-center justify-center rounded-full bg-ink-soft text-heading transition-colors hover:bg-brand-strong hover:text-on-brand"
                    >
                      <SocialIcon network={profile.network} className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <nav aria-label={common.footer.solutionsTitle}>
          <h2 className="mb-4 text-sm font-semibold text-heading">{common.footer.solutionsTitle}</h2>
          <ul className="space-y-2">
            {solutions.map((solution) => (
              <li key={solution.id}>
                <a href={toAnchor(SectionId.Solutions)} className={linkClass}>
                  {solution.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-heading">{common.footer.contactTitle}</h2>
          <ul className="space-y-2">
            <li>
              <a href={whatsappHref} {...EXTERNAL_LINK_PROPS} className={linkClass}>
                {common.footer.whatsappLabel}
              </a>
            </li>
            {site.contact.email && (
              <li>
                <a href={`mailto:${site.contact.email}`} className={linkClass}>
                  {common.footer.emailLabel}
                </a>
              </li>
            )}
            <li className="text-sm text-body">{site.country}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col justify-between gap-2 py-6 text-xs text-body sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. {common.ui.rights}
          </span>
          <span>{common.tagline}</span>
        </Container>
      </div>
    </footer>
  );
}
