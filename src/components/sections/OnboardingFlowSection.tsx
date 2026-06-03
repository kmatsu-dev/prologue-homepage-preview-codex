import { SectionHeader } from "../ui/SectionHeader";
import { siteContent } from "../../data/siteContent";

export function OnboardingFlowSection() {
  const { onboardingFlow } = siteContent.home;

  return (
    <section className="bg-pearl py-16 md:py-24" id="start-flow">
      <div className="container-site">
        <SectionHeader kicker={onboardingFlow.kicker} title={onboardingFlow.title} description="お問い合わせ後は、現在のIndeed運用状況を確認し、改善方針をご提案します。" />
        <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          {onboardingFlow.steps.map((step, index) => (
            <li className="border border-borderSoft bg-white p-5" key={step}>
              <span className="text-xs font-black text-brandBlue">0{index + 1}</span>
              <p className="mt-4 text-sm font-black leading-7 text-ink">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
