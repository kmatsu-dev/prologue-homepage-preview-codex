import { siteContent } from "../../data/siteContent";
import { ButtonLink } from "../ui/ButtonLink";

export function PlatinumAdvantageSection() {
  const { home, global } = siteContent;
  const content = home.platinumAdvantage;

  return (
    <section id="platinum" className="border-b border-borderSoft bg-white text-ink">
      <div className="container-site py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1fr)] lg:items-start">
          <div className="min-w-0">
            <p className="max-w-max border-b border-accentGold/55 pb-2 text-[11px] font-semibold tracking-[.18em] text-accentGold">
              {content.kicker}
            </p>
            <h2 className="safe-break mt-6 max-w-3xl text-[2rem] font-bold leading-[1.25] tracking-normal text-ink md:text-5xl">
              {content.titleLines.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-6 max-w-[640px] space-y-3 text-sm leading-8 text-muted md:hidden">
              {content.mobileLeadParagraphs.map((paragraph) => (
                <p className="safe-break" key={paragraph}>
                  {paragraph.split("\n").map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </p>
              ))}
            </div>
            <div className="mt-6 hidden max-w-[640px] space-y-3 text-base leading-8 text-muted md:block">
              {content.leadParagraphs.map((paragraph) => (
                <p className="safe-break" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink className="w-full sm:w-auto" {...home.heroCtas[0]} />
              <ButtonLink className="w-full sm:w-auto" variant="secondary" {...home.heroCtas[1]} />
            </div>
          </div>

          <aside className="min-w-0 border border-borderSoft bg-[#fbfbf8] p-5 shadow-quiet md:p-7">
            <div className="grid gap-6 md:grid-cols-[150px_1fr] md:items-center">
              <div className="grid place-items-center border border-line bg-white p-5">
                <img
                  alt="Indeed Platinum Partner ロゴ"
                  className="h-32 w-32 object-contain"
                  src={global.brand.badgePath}
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[.16em] text-accentGold">{content.proofLabel}</p>
                <h3 className="safe-break mt-3 text-2xl font-bold leading-8 text-ink">{content.proofTitle}</h3>
                <p className="safe-break mt-4 text-sm leading-7 text-muted">{content.proofBody}</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="border-y border-borderSoft py-2">
            <p className="py-4 text-xs font-bold tracking-[.14em] text-muted">OFFICIAL MERITS</p>
            {content.officialMerits.map((item, index) => (
              <article className="grid gap-3 border-t border-borderSoft py-5 sm:grid-cols-[64px_1fr]" key={item.title}>
                <p className="text-xs font-semibold text-accentGold">0{index + 1}</p>
                <div>
                  <h3 className="safe-break text-base font-bold leading-7 text-ink md:text-lg">{item.title}</h3>
                  <p className="safe-break mt-2 text-sm leading-7 text-muted">{item.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="border border-ink bg-ink p-5 text-white md:p-7">
            <div className="flex flex-col justify-between gap-5 border-b border-white/20 pb-6 md:flex-row md:items-end">
              <div>
                <p className="text-[11px] font-semibold tracking-[.18em] text-accentGold">SELECTION AXIS</p>
                <h3 className="safe-break mt-3 text-2xl font-bold leading-8">比較サイト掲載時にも伝わる優位性</h3>
              </div>
              <p className="max-w-sm text-sm leading-7 text-white/68">
                専門性を、外から見える評価軸に翻訳します。
              </p>
            </div>
            <div className="divide-y divide-white/15">
              {content.listingAxes.map((item) => (
                <article className="grid gap-4 py-6 md:grid-cols-[190px_1fr]" key={item.title}>
                  <h4 className="safe-break text-base font-bold leading-7 text-white">{item.title}</h4>
                  <p className="safe-break text-sm leading-7 text-white/72">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
