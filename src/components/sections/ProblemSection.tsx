import { ButtonLink } from "../ui/ButtonLink";
import { siteContent } from "../../data/siteContent";

export function ProblemSection() {
  const { problems } = siteContent.home;

  return (
    <section className="bg-white py-16 md:py-24" id="problem">
      <div className="container-site grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold tracking-[.18em] text-accentGold">採用数字の詰まり</p>
          <h2 className="mt-5 max-w-xl text-3xl font-bold leading-[1.35] text-ink md:text-5xl">{problems.title}</h2>
          <p className="mt-5 max-w-lg text-sm leading-8 text-muted md:text-base">{problems.lead}</p>
          <div className="mt-8 hidden md:block">
            <ButtonLink {...siteContent.global.ctas.primary} />
          </div>
        </div>

        <div className="border-y border-borderSoft">
          {problems.items.map((item, index) => (
            <article className="grid gap-4 border-b border-borderSoft py-5 last:border-b-0 md:grid-cols-[80px_1fr]" key={item}>
              <span className="text-xs font-semibold tracking-[.16em] text-muted">ISSUE {index + 1}</span>
              <h3 className="text-lg font-semibold leading-8 text-ink">{item}</h3>
            </article>
          ))}
        </div>

        <div className="md:hidden">
          <ButtonLink className="w-full" {...siteContent.global.ctas.primary} />
        </div>
      </div>
    </section>
  );
}
