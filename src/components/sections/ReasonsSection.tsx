import { SectionHeader } from "../ui/SectionHeader";
import { siteContent } from "../../data/siteContent";

export function ReasonsSection() {
  const { reasons, heroProof } = siteContent.home;

  return (
    <section className="bg-[#f8f7f2] py-16 md:py-24" id="reasons">
      <div className="container-site">
        <SectionHeader kicker="プロローグが見るもの" title={reasons.title} description={reasons.lead} />
        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <aside className="border border-borderSoft bg-white p-7 shadow-quiet">
            <p className="text-xs font-semibold tracking-[.16em] text-accentGold">POSITION</p>
            <h3 className="mt-4 text-2xl font-bold leading-9 text-ink">Indeedだけに集中する会社だから、判断が散らからない。</h3>
            <p className="mt-5 text-sm leading-8 text-muted">{heroProof.body}</p>
            <dl className="mt-6 grid gap-4 border-t border-borderSoft pt-6">
              {heroProof.points.map((point) => (
                <div className="grid gap-1" key={point.label}>
                  <dt className="text-xs font-semibold text-muted">{point.label}</dt>
                  <dd className="text-sm font-bold leading-6 text-ink">{point.value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="border-y border-borderSoft">
            {reasons.items.map((item, index) => (
              <article className="grid gap-5 border-b border-borderSoft py-6 last:border-b-0 md:grid-cols-[96px_1fr]" key={item.title}>
                <span className="mincho text-4xl leading-none text-accentGold/70">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-bold leading-8 text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-muted">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
