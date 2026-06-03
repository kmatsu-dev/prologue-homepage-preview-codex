import { HelpCircle } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { siteContent } from "../../data/siteContent";

export function FaqSection() {
  const { faq } = siteContent.home;

  return (
    <section className="bg-white py-16 md:py-24" id="faq">
      <div className="container-site">
        <SectionHeader kicker={faq.kicker} title={faq.title} />
        <div className="grid gap-4 lg:grid-cols-2">
          {faq.items.map((item) => (
            <article className="border border-borderSoft bg-white p-6 shadow-quiet" key={item.question}>
              <div className="flex items-start gap-4">
                <HelpCircle aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brandBlue" />
                <div>
                  <h3 className="text-base font-black leading-8 text-ink">{item.question}</h3>
                  <p className="mt-3 text-sm leading-8 text-muted">{item.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
