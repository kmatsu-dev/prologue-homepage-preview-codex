import { ButtonLink } from "../ui/ButtonLink";
import { siteContent } from "../../data/siteContent";

export function HeroSection() {
  const { home, global } = siteContent;

  return (
    <section className="relative overflow-hidden border-b border-borderSoft bg-[#f8f7f2] text-ink">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accentGold/50 to-transparent" />
      <div className="container-site relative grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,.78fr)] lg:items-center">
        <div className="min-w-0 max-w-[calc(100vw-32px)] lg:max-w-none">
          <p className="max-w-max border-b border-accentGold/55 pb-2 text-[11px] font-semibold tracking-[.18em] text-accentGold">
            {home.hero.eyebrow}
          </p>
          <h1 className="mincho safe-break mt-7 max-w-[760px] text-[2.55rem] font-medium leading-[1.16] tracking-normal text-ink sm:text-6xl lg:text-[4.3rem]">
            <span className="block">Indeedだけを、</span>
            <span className="block">採用の数字で</span>
            <span className="block">動かす。</span>
          </h1>
          <div className="mt-6 max-w-[620px] border-l border-accentGold/45 pl-5 md:mt-7">
            {home.heroMobileLeadParagraphs.map((paragraph, index) => (
              <p
                className={`safe-break text-[15px] leading-7 md:hidden ${
                  index === 0 ? "font-medium text-ink/80" : "mt-3 text-muted"
                }`}
                key={paragraph}
              >
                {paragraph.split("\n").map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </p>
            ))}
            {home.heroLeadParagraphs.map((paragraph, index) => (
              <p
                className={`safe-break hidden text-base leading-8 md:block ${
                  index === 0 ? "font-medium text-ink/80" : "mt-3 text-muted"
                }`}
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
            <ButtonLink className="w-full sm:w-auto" {...home.heroCtas[0]} />
            <ButtonLink className="w-full sm:w-auto" variant="secondary" {...home.heroCtas[1]} />
          </div>

          <dl className="mt-7 grid border-y border-borderSoft text-sm text-ink md:mt-9 md:grid-cols-3">
            {home.heroProof.strip.map((item) => (
              <div className="border-borderSoft py-4 md:border-r md:px-5 md:last:border-r-0" key={item}>
                <dt className="text-[11px] font-semibold tracking-[.12em] text-muted">PROOF</dt>
                <dd className="mt-2 font-bold leading-6">{item}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="min-w-0 max-w-[calc(100vw-32px)] border border-borderSoft bg-white p-6 shadow-quiet lg:max-w-none lg:p-8">
          <div className="grid place-items-center border border-line bg-[#fbfbf8] p-8">
            <img
              alt="Indeed Platinum Partner ロゴ"
              className="h-40 w-40 object-contain md:h-48 md:w-48"
              src={global.brand.badgePath}
            />
          </div>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[.16em] text-accentGold">Platinum Partner Proof</p>
          <h2 className="safe-break mt-3 text-2xl font-bold leading-8 text-ink">{home.heroProof.title}</h2>
          <p className="safe-break mt-4 text-sm leading-8 text-muted">{home.heroProof.body}</p>
          <dl className="mt-6 border-t border-borderSoft">
            {home.heroProof.points.map((point, index) => (
              <div className="grid grid-cols-[52px_1fr] gap-4 border-b border-borderSoft py-4" key={point.label}>
                <dt className="text-xs font-semibold text-muted">0{index + 1}</dt>
                <dd>
                  <p className="text-xs font-semibold text-accentGold">{point.label}</p>
                  <p className="safe-break mt-1 text-sm font-bold leading-6 text-ink">{point.value}</p>
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
