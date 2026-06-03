import { BadgeCheck, BarChart3, Building2, FileSearch, ShieldCheck, UsersRound } from "lucide-react";
import { AnalysisTable } from "../components/ui/AnalysisTable";
import { CertificationBadge } from "../components/ui/CertificationBadge";
import { CtaBand } from "../components/ui/CtaBand";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { siteContent } from "../data/siteContent";

const reasonIcons = [BadgeCheck, UsersRound, FileSearch, BarChart3, Building2] as const;
const reasonLabels = ["Certification", "Results", "Analytics", "Experience", "Group"] as const;

export function ReasonsPage() {
  const { analytics, global, reasons, company } = siteContent;
  const certification = reasons.items[0];
  const results = reasons.items[1];
  const analyticsReason = reasons.items[2];
  const experience = reasons.items[3];
  const group = reasons.items[4];

  return (
    <>
      <PageHero hero={reasons.hero} dark showBadge />

      <section className="bg-white py-16 md:py-24">
        <div className="container-site">
          <SectionHeader
            kicker="Five Reasons"
            title="選ばれる理由を、信頼・成果・判断力の順に整理する。"
            description={reasons.hero.lead}
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {reasons.items.map((item, index) => {
              const Icon = reasonIcons[index] ?? ShieldCheck;

              return (
                <article className="border border-borderSoft bg-white p-6 shadow-quiet" key={item.title}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center border border-brandBlue/15 bg-brandBlue/5 text-brandBlue">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <span className="text-right text-[11px] font-black uppercase tracking-[.14em] text-accentGold">
                      {reasonLabels[index]}
                    </span>
                  </div>
                  <h2 className="mt-6 text-lg font-black leading-8 text-ink">{item.title}</h2>
                  <p className="mt-4 text-sm leading-8 text-muted">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-warm py-16 md:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[.88fr_1.12fr] lg:items-start">
          <div className="border border-borderSoft bg-navy p-7 text-white shadow-lift md:p-9">
            <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">Trust Proof</p>
            <h2 className="mincho mt-4 text-3xl font-medium leading-[1.45] md:text-4xl">
              認定と実績を、相談前の安心材料にする。
            </h2>
            <p className="mt-5 text-sm leading-8 text-white/72">
              {global.brand.certificationLabel}としての信頼と、{results.title}で培った知見を、採用改善の入口に置きます。
            </p>
            <div className="mt-7">
              <CertificationBadge dark />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="border border-borderSoft bg-white p-6 shadow-quiet md:p-7">
              <BadgeCheck aria-hidden="true" className="h-6 w-6 text-accentGold" />
              <p className="mt-5 text-xs font-black uppercase tracking-[.16em] text-accentGold">Certification</p>
              <h3 className="mt-3 text-xl font-black leading-8 text-ink">{certification.title}</h3>
              <p className="mt-4 text-sm leading-8 text-muted">{certification.body}</p>
            </article>
            <article className="border border-borderSoft bg-white p-6 shadow-quiet md:p-7">
              <UsersRound aria-hidden="true" className="h-6 w-6 text-brandBlue" />
              <p className="mt-5 text-xs font-black uppercase tracking-[.16em] text-accentGold">Results</p>
              <h3 className="mt-3 text-xl font-black leading-8 text-ink">{results.title}</h3>
              <p className="mt-4 text-sm leading-8 text-muted">{results.body}</p>
              <div className="mt-6 border-l border-accentGold/50 pl-5">
                <p className="mincho text-4xl font-medium leading-none text-brandBlue">{global.metrics[0].value}</p>
                <p className="mt-2 text-sm font-black text-ink">{global.metrics[0].label}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="Operational Quality"
              title="解析力と経験値で、改善判断の質を上げる。"
              description={`${analyticsReason.body} ${experience.body}`}
            />
            <AnalysisTable rows={analytics.tableRows} title="解析で確認する改善指標" />
          </div>

          <div className="grid gap-4">
            <article className="border border-borderSoft bg-pearl p-6 md:p-7">
              <FileSearch aria-hidden="true" className="h-6 w-6 text-dataTeal" />
              <p className="mt-5 text-xs font-black uppercase tracking-[.16em] text-accentGold">Analytics</p>
              <h3 className="mt-3 text-xl font-black leading-8 text-ink">{analyticsReason.title}</h3>
              <p className="mt-4 text-sm leading-8 text-muted">{analyticsReason.body}</p>
            </article>
            <article className="border border-borderSoft bg-white p-6 shadow-quiet md:p-7">
              <BarChart3 aria-hidden="true" className="h-6 w-6 text-brandBlue" />
              <p className="mt-5 text-xs font-black uppercase tracking-[.16em] text-accentGold">Experience</p>
              <h3 className="mt-3 text-xl font-black leading-8 text-ink">{experience.title}</h3>
              <p className="mt-4 text-sm leading-8 text-muted">{experience.body}</p>
              <div className="mt-6 border-l border-brandBlue/30 pl-5">
                <p className="mincho text-4xl font-medium leading-none text-brandBlue">{global.metrics[1].value}</p>
                <p className="mt-2 text-sm font-black text-ink">{global.metrics[1].label}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white md:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">Group Strength</p>
            <h2 className="mincho mt-4 text-3xl font-medium leading-[1.45] md:text-4xl">{company.hero.title}</h2>
            <p className="mt-5 text-sm leading-8 text-white/72">{company.hero.lead}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-[.9fr_1.1fr]">
            <article className="border border-white/12 bg-white/[.04] p-6 md:p-7">
              <Building2 aria-hidden="true" className="h-6 w-6 text-accentGold" />
              <p className="mt-5 text-xs font-black uppercase tracking-[.16em] text-accentGold">Group</p>
              <h3 className="mt-3 text-xl font-black leading-8">{group.title}</h3>
              <p className="mt-4 text-sm leading-8 text-white/68">{group.body}</p>
            </article>
            <article className="border border-white/12 bg-white p-6 text-ink shadow-lift md:p-7">
              <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brandBlue" />
              <p className="mt-5 text-xs font-black uppercase tracking-[.16em] text-accentGold">Foundation</p>
              <h3 className="mt-3 text-xl font-black leading-8 text-ink">グループ基盤を、継続支援の体制に変える。</h3>
              <p className="mt-4 text-sm leading-8 text-muted">{group.body}</p>
              <div className="mt-6 border-l border-brandBlue/30 pl-5">
                <p className="mincho text-4xl font-medium leading-none text-brandBlue">{global.metrics[2].value}</p>
                <p className="mt-2 text-sm font-black text-ink">{global.metrics[2].label}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
