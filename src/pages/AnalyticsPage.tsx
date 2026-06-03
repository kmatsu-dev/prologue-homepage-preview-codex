import { Activity, ArrowUpRight, ClipboardCheck, Database, FileText, Gauge, Lightbulb, RefreshCw } from "lucide-react";
import { AnalysisTable } from "../components/ui/AnalysisTable";
import { ChartPanel } from "../components/ui/ChartPanel";
import { CtaBand } from "../components/ui/CtaBand";
import { PageHero } from "../components/ui/PageHero";
import { ProcessSteps } from "../components/ui/ProcessSteps";
import { SectionHeader } from "../components/ui/SectionHeader";
import { siteContent } from "../data/siteContent";

const processIcons = [Database, Activity, Lightbulb, RefreshCw, ClipboardCheck] as const;
const dashboardIcons = [Gauge, Activity, ArrowUpRight, ClipboardCheck] as const;

export function AnalyticsPage() {
  const { analytics, services } = siteContent;
  const reportItem = services.items.find((item) => item.title === "解析レポート") ?? services.items[3];
  const proposalItem = services.items.find((item) => item.title === "改善提案") ?? services.items[4];
  const funnelItem = services.items.find((item) => item.title === "歩留まり改善") ?? services.items[5];
  const primaryRow = analytics.tableRows[0];

  return (
    <>
      <PageHero hero={analytics.hero} dark />

      <section className="bg-white py-16 md:py-24">
        <div className="container-site">
          <SectionHeader kicker="Dashboard" title={analytics.hero.title} description={analytics.hero.lead} />

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.72fr)] lg:items-start">
            <div className="grid gap-6">
              <ChartPanel title={reportItem.title} />

              <div className="grid gap-4 sm:grid-cols-2">
                {analytics.tableRows.map((row, index) => {
                  const Icon = dashboardIcons[index % dashboardIcons.length];

                  return (
                    <article className="border border-borderSoft bg-warm p-5" key={row.label}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center border border-brandBlue/15 bg-white text-brandBlue">
                          <Icon aria-hidden="true" className="h-5 w-5" />
                        </div>
                        <span className="text-right text-xs font-black tracking-[.14em] text-accentGold">KPI 0{index + 1}</span>
                      </div>
                      <h2 className="mt-5 text-sm font-black text-ink">{row.label}</h2>
                      <p className="mt-3 font-serif text-4xl font-medium leading-none text-dataTeal">{row.value}</p>
                      <p className="mt-3 text-xs font-bold leading-6 text-muted">{row.note}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <aside className="border border-borderSoft bg-navy p-5 text-white shadow-lift md:p-7">
              <div className="flex items-start justify-between gap-5 border-b border-white/12 pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">Report Sample</p>
                  <h2 className="mincho mt-3 text-2xl font-medium leading-[1.45]">{reportItem.title}</h2>
                </div>
                <FileText aria-hidden="true" className="h-6 w-6 shrink-0 text-accentGold" />
              </div>

              <div className="mt-5 border border-white/12 bg-white/[.04] p-4">
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {analytics.tableRows.slice(0, 3).map((row) => (
                    <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0" key={row.label}>
                      <span className="text-xs font-bold text-white/66">{row.label}</span>
                      <span className="text-sm font-black text-white">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                {[reportItem, proposalItem, funnelItem].map((item) => (
                  <article className="border border-white/12 bg-white p-5 text-ink" key={item.title}>
                    <h3 className="text-sm font-black">{item.title}</h3>
                    <p className="mt-3 text-xs leading-6 text-muted">{item.body}</p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-warm py-16 md:py-24">
        <div className="container-site">
          <SectionHeader kicker="Process" title={`${analytics.process[0]}から${analytics.process[analytics.process.length - 1]}まで。`} description={proposalItem.body} />

          <div className="grid gap-8 lg:grid-cols-[.72fr_1fr] lg:items-start">
            <div className="border border-borderSoft bg-white p-6 shadow-quiet md:p-7">
              <ProcessSteps steps={analytics.process} />
            </div>

            <div className="grid gap-4">
              {analytics.process.map((step, index) => {
                const Icon = processIcons[index % processIcons.length];
                const relatedRow = analytics.tableRows[index % analytics.tableRows.length];

                return (
                  <article className="grid gap-4 border border-borderSoft bg-white p-5 shadow-quiet sm:grid-cols-[56px_1fr_auto] sm:items-center" key={step}>
                    <div className="grid h-12 w-12 place-items-center border border-brandBlue/15 bg-brandBlue/5 text-brandBlue">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-black tracking-[.16em] text-accentGold">STEP 0{index + 1}</p>
                      <h3 className="mt-2 text-lg font-black text-ink">{step}</h3>
                    </div>
                    <div className="border-t border-line pt-4 sm:min-w-32 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                      <p className="text-xs font-bold text-muted">{relatedRow.label}</p>
                      <p className="mt-1 text-xl font-black text-dataTeal">{relatedRow.value}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[.82fr_1fr] lg:items-start">
          <div>
            <SectionHeader kicker="Analysis Table" title="改善判断の主要指標を、施策へ接続する。" description={reportItem.body} />
            <div className="border border-borderSoft bg-pearl p-6">
              <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">Priority</p>
              <h2 className="mincho mt-4 text-3xl font-medium leading-[1.45] text-ink">{primaryRow.label}</h2>
              <p className="mt-4 text-sm leading-8 text-muted">{primaryRow.note}</p>
              <p className="mt-5 font-serif text-5xl font-medium leading-none text-brandBlue">{primaryRow.value}</p>
            </div>
          </div>

          <AnalysisTable rows={analytics.tableRows} title="改善インパクト分析" />
        </div>
      </section>

      <CtaBand title={analytics.hero.title} body={analytics.hero.lead} />
    </>
  );
}
