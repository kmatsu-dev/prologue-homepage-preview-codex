import { BarChart3, CheckCircle2, ClipboardList, RefreshCw } from "lucide-react";
import { ButtonLink } from "../components/ui/ButtonLink";
import { CtaBand } from "../components/ui/CtaBand";
import { PageHero } from "../components/ui/PageHero";
import { ProcessSteps } from "../components/ui/ProcessSteps";
import { SectionHeader } from "../components/ui/SectionHeader";
import { siteContent } from "../data/siteContent";

const serviceIcons = [ClipboardList, CheckCircle2, BarChart3, RefreshCw, CheckCircle2, BarChart3] as const;

export function ServicesPage() {
  const { services } = siteContent;

  return (
    <>
      <PageHero hero={services.hero} dark showBadge />

      <section className="bg-white py-16 md:py-24">
        <div className="container-site">
          <SectionHeader
            kicker="Service Lineup"
            title="採用成果につながる運用領域を、まとめて支援します。"
            description={services.hero.lead}
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.items.map((item, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];

              return (
                <article className="grid min-h-[220px] border border-borderSoft bg-white p-6 shadow-quiet md:p-7" key={item.title}>
                  <div className="flex items-start justify-between gap-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center border border-borderSoft bg-warm text-brandBlue">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-black tracking-[.16em] text-accentGold">0{index + 1}</span>
                  </div>
                  <div className="mt-8">
                    <h2 className="text-xl font-black leading-8 text-ink">{item.title}</h2>
                    <p className="mt-4 text-sm leading-8 text-muted">{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-warm py-16 md:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              kicker="Operation Process"
              title={`${services.process[0]}から${services.process[services.process.length - 1]}まで、判断を止めない運用プロセス。`}
              description={services.items[4].body}
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink className="w-full sm:w-auto" {...siteContent.global.ctas.primary} />
              <ButtonLink className="w-full sm:w-auto" variant="secondary" {...siteContent.global.ctas.secondary} />
            </div>
          </div>

          <div className="border border-borderSoft bg-white p-5 shadow-quiet md:p-7">
            <ProcessSteps steps={services.process} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
