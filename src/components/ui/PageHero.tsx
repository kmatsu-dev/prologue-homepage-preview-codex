import { siteContent, type PageHero as PageHeroContent } from "../../data/siteContent";
import { ButtonLink } from "./ButtonLink";
import { CertificationBadge } from "./CertificationBadge";
import { KpiCard } from "./KpiCard";

type PageHeroProps = {
  hero: PageHeroContent;
  dark?: boolean;
  showBadge?: boolean;
};

export function PageHero({ hero, dark = false, showBadge = false }: PageHeroProps) {
  return (
    <section className={`${dark ? "bg-navy text-white" : "bg-pearl text-ink"} py-16 md:py-24`}>
      <div className="container-site grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div className="min-w-0">
          <p className={`text-xs font-black uppercase tracking-[.18em] ${dark ? "text-accentGold" : "text-accentGold"}`}>{hero.eyebrow}</p>
          {showBadge ? <div className="mt-6"><CertificationBadge dark={dark} /></div> : null}
          <h1 className="mincho safe-break mt-7 text-balance text-4xl font-medium leading-[1.35] md:text-5xl md:leading-[1.28] lg:text-6xl lg:leading-[1.22]">
            {hero.title}
          </h1>
          <p className={`safe-break mt-6 max-w-2xl text-sm leading-7 md:text-base md:leading-8 ${dark ? "text-white/76" : "text-muted"}`}>{hero.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink className="w-full sm:w-auto" {...siteContent.global.ctas.primary} />
            <ButtonLink className="w-full sm:w-auto" variant={dark ? "dark" : "secondary"} {...siteContent.global.ctas.secondary} />
          </div>
        </div>
        <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {siteContent.global.metrics.map((metric) => (
            <KpiCard key={metric.label} tone={dark ? "dark" : "light"} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
