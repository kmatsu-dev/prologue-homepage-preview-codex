import { BadgeCheck, BarChart3, CheckCircle2, FileSearch, Medal, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { CertificationBadge } from "../components/ui/CertificationBadge";
import { CtaBand } from "../components/ui/CtaBand";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { siteContent } from "../data/siteContent";

const valueIcons = [Medal, BarChart3, ShieldCheck] as const;
const benefitIcons = [UsersRound, BadgeCheck, FileSearch, ShieldCheck] as const;

export function PlatinumPartnerPage() {
  const { platinumPartner, global, analytics, services } = siteContent;
  const certificationLabel = global.brand.certificationLabel;

  return (
    <>
      <PageHero hero={platinumPartner.hero} dark showBadge />

      <section className="bg-white py-16 md:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div className="border border-borderSoft bg-navy p-6 text-white shadow-lift md:p-8">
            <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">Certified Badge</p>
            <h2 className="mincho mt-4 text-3xl font-medium leading-[1.45] md:text-4xl">{certificationLabel}</h2>
            <p className="mt-5 text-sm leading-8 text-white/72">{platinumPartner.hero.lead}</p>
            <div className="mt-7">
              <CertificationBadge dark />
            </div>
          </div>

          <div>
            <SectionHeader
              kicker="Certification Value"
              title="認定の価値を、採用成果につながる支援へ変える。"
              description={platinumPartner.comparison.lead}
            />
            <div className="grid gap-4 md:grid-cols-3">
              {platinumPartner.certificationValue.map((item, index) => {
                const Icon = valueIcons[index % valueIcons.length];

                return (
                  <article className="border border-borderSoft bg-warm p-6 shadow-quiet" key={item.title}>
                    <div className="grid h-12 w-12 place-items-center border border-brandBlue/15 bg-white text-brandBlue">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-black leading-8 text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-8 text-muted">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm py-16 md:py-24">
        <div className="container-site">
          <SectionHeader
            kicker="Comparison"
            title={platinumPartner.comparison.title}
            description={platinumPartner.comparison.lead}
          />

          <div className="overflow-hidden border border-borderSoft bg-white shadow-quiet">
            <div className="hidden grid-cols-[.78fr_1fr_1.05fr] border-b border-borderSoft bg-pearl md:grid">
              <div className="px-5 py-4 text-xs font-black uppercase tracking-[.16em] text-accentGold">Point</div>
              {platinumPartner.comparison.columns.map((column, index) => (
                <div
                  className={`px-5 py-4 text-sm font-black ${index === 1 ? "bg-navy text-white" : "text-ink"}`}
                  key={column}
                >
                  {column}
                </div>
              ))}
            </div>

            <div className="divide-y divide-borderSoft">
              {platinumPartner.comparison.rows.map((row) => (
                <article className="grid gap-0 md:grid-cols-[.78fr_1fr_1.05fr]" key={row.label}>
                  <div className="bg-pearl px-5 py-5">
                    <p className="text-xs font-black uppercase tracking-[.16em] text-accentGold">Point</p>
                    <h3 className="mt-2 text-lg font-black text-ink">{row.label}</h3>
                  </div>
                  <div className="border-t border-borderSoft px-5 py-5 md:border-l md:border-t-0">
                    <p className="mb-2 text-xs font-black text-muted md:hidden">{platinumPartner.comparison.columns[0]}</p>
                    <p className="text-sm leading-8 text-muted">{row.standard}</p>
                  </div>
                  <div className="border-t border-borderSoft bg-navy px-5 py-5 text-white md:border-l md:border-t-0">
                    <p className="mb-2 text-xs font-black text-accentGold md:hidden">{platinumPartner.comparison.columns[1]}</p>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-accentGold" />
                      <p className="text-sm font-bold leading-8 text-white/86">{row.platinum}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="Merits"
              title="相談するメリットを、実務の改善単位で見る。"
              description={`${services.hero.lead} ${analytics.hero.lead}`}
            />
            <div className="border border-borderSoft bg-pearl p-6 md:p-7">
              <Sparkles aria-hidden="true" className="h-6 w-6 text-accentGold" />
              <h2 className="mincho mt-4 text-3xl font-medium leading-[1.45] text-ink">{platinumPartner.hero.title}</h2>
              <p className="mt-4 text-sm leading-8 text-muted">{platinumPartner.hero.lead}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {platinumPartner.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];

              return (
                <article className="border border-borderSoft bg-white p-6 shadow-quiet md:p-7" key={benefit.title}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center border border-brandBlue/15 bg-brandBlue/5 text-brandBlue">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <span className="text-right text-xs font-black tracking-[.16em] text-accentGold">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-black leading-8 text-ink">{benefit.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-muted">{benefit.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title="認定パートナーに、採用改善を相談する。" body={platinumPartner.hero.lead} />
    </>
  );
}
