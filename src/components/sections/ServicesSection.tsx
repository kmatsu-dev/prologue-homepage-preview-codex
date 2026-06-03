import { Link } from "react-router-dom";
import { ButtonLink } from "../ui/ButtonLink";
import { SectionHeader } from "../ui/SectionHeader";
import { siteContent } from "../../data/siteContent";

export function ServicesSection() {
  const { home, global } = siteContent;
  const [primaryService, ...otherServices] = home.services;

  return (
    <section className="bg-white py-16 md:py-24" id="services">
      <div className="container-site">
        <SectionHeader kicker="支援領域" title={home.serviceSection.title} description={home.serviceSection.lead} />
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch">
          <Link className="border border-borderSoft bg-navy p-8 text-white shadow-lift md:p-10" to={primaryService.href}>
            <p className="text-xs font-semibold tracking-[.18em] text-accentGold">PRIMARY</p>
            <h3 className="mt-5 text-3xl font-bold leading-[1.35] md:text-4xl">{primaryService.title}</h3>
            <p className="mt-6 text-sm leading-8 text-white/72 md:text-base">{primaryService.body}</p>
            <span className="mt-8 inline-flex border-b border-white/50 pb-2 text-sm font-bold">詳しく見る</span>
          </Link>

          <div className="border-y border-borderSoft">
            {otherServices.map((service, index) => (
              <Link
                className="grid gap-4 border-b border-borderSoft py-6 transition hover:bg-warm last:border-b-0 md:grid-cols-[72px_1fr_auto]"
                key={service.title}
                to={service.href}
              >
                <span className="text-xs font-semibold tracking-[.16em] text-muted">0{index + 2}</span>
                <div>
                  <h3 className="text-xl font-bold leading-8 text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-8 text-muted">{service.body}</p>
                </div>
                <span className="self-center text-sm font-bold text-brandBlue">詳しく見る</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10 border border-borderSoft bg-[#f8f7f2] p-6 md:flex md:items-center md:justify-between md:gap-8">
          <p className="text-base font-bold leading-8 text-ink">まずは求人ごとの数字を見て、最初に直すべき箇所を整理します。</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0">
            <ButtonLink className="w-full sm:w-auto" {...global.ctas.primary} />
            <ButtonLink className="w-full sm:w-auto" variant="secondary" {...global.ctas.secondary} />
          </div>
        </div>
      </div>
    </section>
  );
}
