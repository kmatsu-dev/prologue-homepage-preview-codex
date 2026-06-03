import { siteContent } from "../../data/siteContent";

export function ImprovementFlowSection() {
  const { improvementFlow } = siteContent.home;

  return (
    <section className="bg-navy py-16 text-white md:py-24" id="process">
      <div className="container-site">
        <div className="mb-10 grid gap-5 lg:grid-cols-[220px_1fr]">
          <p className="text-xs font-semibold tracking-[.18em] text-accentGold">改善の手順</p>
          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-[1.4] text-white md:text-5xl">{improvementFlow.title}</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-white/70 md:text-base">{improvementFlow.lead}</p>
          </div>
        </div>
        <ol className="border-y border-white/14">
          {improvementFlow.steps.map((step, index) => (
            <li className="grid gap-4 border-b border-white/14 py-5 last:border-b-0 md:grid-cols-[96px_1fr]" key={step}>
              <span className="text-xs font-semibold tracking-[.16em] text-accentGold">STEP {index + 1}</span>
              <p className="text-lg font-semibold leading-8 text-white">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
