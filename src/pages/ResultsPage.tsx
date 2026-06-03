import { ArrowUpRight, BriefcaseBusiness, Building2, Filter, LineChart, MapPin, Target, UsersRound } from "lucide-react";
import { useMemo, useState } from "react";
import { CtaBand } from "../components/ui/CtaBand";
import { KpiCard } from "../components/ui/KpiCard";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { siteContent } from "../data/siteContent";

type FilterKey = "all" | "retail" | "technical" | "volume";
type ChallengeKey = "all" | "cost" | "conversion" | "hiringRate";

const industryFilters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "retail", label: "販売職" },
  { key: "technical", label: "技術職" },
  { key: "volume", label: "大量採用" },
];

const challengeFilters: { key: ChallengeKey; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "cost", label: "応募単価" },
  { key: "conversion", label: "応募数 / CVR" },
  { key: "hiringRate", label: "採用率" },
];

const caseMeta: {
  industry: FilterKey;
  challenge: ChallengeKey;
  area: string;
  focus: string;
  icon: typeof MapPin;
}[] = [
  { industry: "retail", challenge: "cost", area: "地方採用", focus: "予算再配分", icon: MapPin },
  { industry: "technical", challenge: "conversion", area: "専門職採用", focus: "原稿訴求改善", icon: BriefcaseBusiness },
  { industry: "volume", challenge: "hiringRate", area: "大量採用", focus: "応募後フロー整理", icon: UsersRound },
];

export function ResultsPage() {
  const { results, analytics, global } = siteContent;
  const [industryFilter, setIndustryFilter] = useState<FilterKey>("all");
  const [challengeFilter, setChallengeFilter] = useState<ChallengeKey>("all");

  const resultMetrics = useMemo(() => [global.metrics[0], ...results.metrics], [global.metrics, results.metrics]);

  const enrichedCases = results.cases.map((item, index) => ({
    ...item,
    ...(caseMeta[index] ?? caseMeta[0]),
  }));

  const visibleCases = enrichedCases.filter((item) => {
    const industryMatches = industryFilter === "all" || item.industry === industryFilter;
    const challengeMatches = challengeFilter === "all" || item.challenge === challengeFilter;
    return industryMatches && challengeMatches;
  });

  return (
    <>
      <PageHero hero={results.hero} dark showBadge />

      <section className="border-b border-borderSoft bg-white py-8">
        <div className="container-site grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resultMetrics.map((metric, index) => (
            <KpiCard key={`${metric.label}-${index}`} {...metric} />
          ))}
        </div>
      </section>

      <section className="bg-warm py-16 md:py-24">
        <div className="container-site">
          <SectionHeader
            kicker="Case Filter"
            title="業種と課題から、近い支援事例を探せる構成に。"
            description={results.hero.lead}
          />

          <div className="grid gap-5 border border-borderSoft bg-white p-5 shadow-quiet md:p-6 lg:grid-cols-[180px_1fr] lg:items-start">
            <div className="flex items-center gap-3 text-sm font-black text-ink">
              <span className="grid h-10 w-10 place-items-center border border-brandBlue/20 bg-brandBlue/5 text-brandBlue">
                <Filter aria-hidden="true" className="h-5 w-5" />
              </span>
              絞り込み
            </div>

            <div className="grid gap-4">
              <div>
                <p className="text-xs font-black tracking-[.14em] text-muted">業種 / 採用領域</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {industryFilters.map((filter) => (
                    <button
                      className={`min-h-11 border px-4 text-sm font-bold transition duration-200 ${
                        industryFilter === filter.key
                          ? "border-brandBlue bg-brandBlue text-white"
                          : "border-borderSoft bg-white text-ink hover:border-brandBlue/50"
                      }`}
                      aria-pressed={industryFilter === filter.key}
                      key={filter.key}
                      onClick={() => setIndustryFilter(filter.key)}
                      type="button"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-black tracking-[.14em] text-muted">課題</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {challengeFilters.map((filter) => (
                    <button
                      className={`min-h-11 border px-4 text-sm font-bold transition duration-200 ${
                        challengeFilter === filter.key
                          ? "border-accentGold bg-accentGold text-white"
                          : "border-borderSoft bg-white text-ink hover:border-accentGold/60"
                      }`}
                      aria-pressed={challengeFilter === filter.key}
                      key={filter.key}
                      onClick={() => setChallengeFilter(filter.key)}
                      type="button"
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {visibleCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  className="flex min-h-[360px] flex-col border border-borderSoft bg-white p-6 shadow-quiet transition duration-200 hover:-translate-y-1 hover:border-brandBlue/35 hover:shadow-lift md:p-7"
                  key={item.title}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center border border-brandBlue/20 bg-brandBlue/5 text-brandBlue">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-black tracking-[.16em] text-accentGold">CASE 0{index + 1}</span>
                  </div>

                  <div className="mt-7">
                    <p className="text-sm font-black text-dataTeal">{item.eyebrow}</p>
                    <h2 className="mt-3 text-xl font-black leading-8 text-ink">{item.title}</h2>
                    <p className="mt-4 text-sm leading-8 text-muted">{item.body}</p>
                  </div>

                  <dl className="mt-auto grid gap-3 pt-7 text-sm">
                    <div className="grid grid-cols-[92px_1fr] gap-3 border-t border-line pt-4">
                      <dt className="font-black text-ink">領域</dt>
                      <dd className="text-muted">{item.area}</dd>
                    </div>
                    <div className="grid grid-cols-[92px_1fr] gap-3 border-t border-line pt-4">
                      <dt className="font-black text-ink">打ち手</dt>
                      <dd className="text-muted">{item.focus}</dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>

          {visibleCases.length === 0 ? (
            <div className="mt-8 border border-borderSoft bg-white p-7 text-center shadow-quiet">
              <p className="text-sm font-bold leading-7 text-muted">条件に合う事例は、現在の仮データでは未掲載です。</p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="Improvement"
              title="改善数値を、次の施策判断へつなげる。"
              description={analytics.hero.lead}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="border border-borderSoft bg-pearl p-6">
                <Building2 aria-hidden="true" className="h-6 w-6 text-accentGold" />
                <h3 className="mt-4 text-base font-black text-ink">{global.metrics[0].label}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{global.metrics[0].description}</p>
              </article>
              <article className="border border-borderSoft bg-warm p-6">
                <Target aria-hidden="true" className="h-6 w-6 text-brandBlue" />
                <h3 className="mt-4 text-base font-black text-ink">{analytics.tableRows[0].note}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{results.cases[0].body}</p>
              </article>
            </div>
          </div>

          <div className="border border-borderSoft bg-navy p-5 text-white shadow-lift md:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">Score Board</p>
                <h2 className="mincho mt-3 text-2xl font-medium leading-[1.45] md:text-3xl">主要指標の改善例</h2>
              </div>
              <LineChart aria-hidden="true" className="h-6 w-6 text-accentGold" />
            </div>

            <div className="mt-6 grid gap-4">
              {analytics.tableRows.slice(0, 3).map((row) => (
                <article className="border border-white/12 bg-white/[.05] p-5" key={row.label}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-black text-white">{row.label}</h3>
                    <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-accentGold" />
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <p className="mincho text-4xl font-medium leading-none text-white">{row.value}</p>
                    <p className="text-xs font-black text-white/62">{row.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="近い支援事例をもとに、改善余地を整理しませんか。" body={results.hero.lead} />
    </>
  );
}
