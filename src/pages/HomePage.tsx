import { FaqSection } from "../components/sections/FaqSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { GroupRelationSection } from "../components/sections/GroupRelationSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ImprovementFlowSection } from "../components/sections/ImprovementFlowSection";
import { OnboardingFlowSection } from "../components/sections/OnboardingFlowSection";
import { PlatinumAdvantageSection } from "../components/sections/PlatinumAdvantageSection";
import { ProblemSection } from "../components/sections/ProblemSection";
import { ReasonsSection } from "../components/sections/ReasonsSection";
import { ServicesSection } from "../components/sections/ServicesSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PlatinumAdvantageSection />
      <ProblemSection />
      <ReasonsSection />
      <ServicesSection />
      <ImprovementFlowSection />
      <GroupRelationSection />
      <OnboardingFlowSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
