import { BadgeCheck, Building2, FileText, LineChart, MessageSquareQuote, ShieldCheck, UsersRound } from "lucide-react";
import { CertificationBadge } from "../components/ui/CertificationBadge";
import { CtaBand } from "../components/ui/CtaBand";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { siteContent } from "../data/siteContent";

const proofIcons = [BadgeCheck, UsersRound, LineChart, Building2] as const;
const groupIcons = [Building2, ShieldCheck, FileText] as const;

export function CompanyPage() {
  const { company, global } = siteContent;

  return (
    <>
      <PageHero hero={company.hero} dark showBadge />

      <section className="border-b border-borderSoft bg-white py-8">
        <div className="container-site grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {company.proofStrip.map((item, index) => {
            const Icon = proofIcons[index % proofIcons.length];

            return (
              <article className="grid min-h-[180px] border border-borderSoft bg-white p-5 shadow-quiet" key={item.label}>
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center border border-brandBlue/15 bg-brandBlue/5 text-brandBlue">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <span className="text-right text-[11px] font-black uppercase tracking-[.14em] text-accentGold">Proof</span>
                </div>
                <div className="mt-5">
                  <p className="mincho safe-break text-4xl font-medium leading-none text-brandBlue">{item.value}</p>
                  <h2 className="mt-3 text-sm font-black leading-6 text-ink">{item.label}</h2>
                  <p className="mt-2 text-xs leading-6 text-muted">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-warm py-16 md:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="Company Profile"
              title={`${global.company.legalName}の会社概要。`}
              description={company.hero.lead}
            />
            <div className="border border-borderSoft bg-navy p-7 text-white shadow-lift md:p-9">
              <Building2 aria-hidden="true" className="h-7 w-7 text-accentGold" />
              <h2 className="mincho mt-5 text-3xl font-medium leading-[1.45] md:text-4xl">{company.hero.title}</h2>
              <p className="mt-5 text-sm leading-8 text-white/72">{company.hero.lead}</p>
              <div className="mt-7">
                <CertificationBadge dark />
              </div>
            </div>
          </div>

          <div className="overflow-hidden border border-borderSoft bg-white shadow-quiet">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {company.profile.map(([label, value]) => (
                  <tr className="border-b border-line last:border-b-0" key={label}>
                    <th className="w-32 bg-pearl px-4 py-5 align-top text-xs font-black leading-6 text-ink sm:w-44 sm:px-6">
                      {label}
                    </th>
                    <td className="safe-break px-4 py-5 leading-8 text-muted sm:px-6">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:col-start-2">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">Related Companies</p>
                <h3 className="mt-2 text-xl font-black leading-8 text-ink">関連会社</h3>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {company.relatedCompanies.map((item) =>
                "url" in item ? (
                  <a
                    className="group border border-borderSoft bg-white p-5 shadow-quiet transition hover:border-brandBlue/40"
                    href={item.url}
                    key={item.name}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <RelatedCompanyCard item={item} />
                  </a>
                ) : (
                  <div className="border border-borderSoft bg-white p-5 shadow-quiet" key={item.name}>
                    <RelatedCompanyCard item={item} />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">{company.message.eyebrow}</p>
            <h2 className="mincho safe-break mt-4 text-balance text-3xl font-medium leading-[1.45] text-ink md:text-4xl">
              {company.message.title}
            </h2>
            <p className="mt-5 text-sm leading-8 text-muted md:text-base">{company.message.lead}</p>
          </div>

          <article className="border border-borderSoft bg-pearl p-6 shadow-quiet md:p-8">
            <MessageSquareQuote aria-hidden="true" className="h-7 w-7 text-accentGold" />
            <p className="mt-6 text-sm leading-8 text-muted md:text-base">{company.message.body}</p>
            <div className="mt-7 border-t border-borderSoft pt-5">
              <p className="text-xs font-black uppercase tracking-[.16em] text-muted">Representative</p>
              <p className="mt-2 text-base font-black text-ink">{company.message.signer}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-navy py-16 text-white md:py-24">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">{company.group.eyebrow}</p>
              <h2 className="mincho safe-break mt-4 text-balance text-3xl font-medium leading-[1.45] md:text-4xl">
                {company.group.title}
              </h2>
              <p className="mt-5 text-sm leading-8 text-white/72 md:text-base">{company.group.lead}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {company.group.items.map((item, index) => {
                const Icon = groupIcons[index % groupIcons.length];

                return (
                  <article className="border border-white/12 bg-white/[.04] p-6" key={item.title}>
                    <div className="grid h-12 w-12 place-items-center border border-accentGold/30 bg-navyDeep/70 text-accentGold">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-black leading-8 text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-8 text-white/68">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title={company.hero.title} body={company.hero.lead} />
    </>
  );
}

function RelatedCompanyCard({ item }: { item: (typeof siteContent.company.relatedCompanies)[number] }) {
  return (
    <>
      <div className="grid h-24 place-items-center border border-line bg-[#fbfbf8] px-5 py-4">
        <img alt={item.name} className="max-h-14 w-auto object-contain" src={item.logoPath} />
      </div>
      <h4 className="safe-break mt-4 text-sm font-black leading-6 text-ink">{item.name}</h4>
      <p className="mt-2 text-xs leading-6 text-muted">{item.note}</p>
    </>
  );
}
