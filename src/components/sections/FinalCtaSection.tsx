import { ButtonLink } from "../ui/ButtonLink";
import { siteContent } from "../../data/siteContent";

export function FinalCtaSection() {
  const { finalCta } = siteContent.home;
  const [primaryCta, secondaryCta] = finalCta.ctas;

  return (
    <section className="bg-navy py-16 text-white md:py-24">
      <div className="container-site">
        <p className="text-xs font-semibold tracking-[.18em] text-accentGold">{finalCta.kicker}</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-3xl text-3xl font-bold leading-[1.35] md:text-5xl">{finalCta.title}</h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/70 md:text-base">{finalCta.lead}</p>
          </div>
          <div className="grid gap-4 lg:min-w-[320px]">
            <ButtonLink className="w-full" {...primaryCta} />
            <ButtonLink className="w-full" variant="dark" {...secondaryCta} />
          </div>
        </div>
      </div>
    </section>
  );
}
