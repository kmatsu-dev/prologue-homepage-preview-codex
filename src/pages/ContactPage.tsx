import { BadgeCheck, CalendarCheck2, CheckCircle2, FileText, Mail, MessageSquareText, PhoneCall, ShieldCheck } from "lucide-react";
import { CertificationBadge } from "../components/ui/CertificationBadge";
import { ContactForm } from "../components/ui/ContactForm";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { siteContent } from "../data/siteContent";

const trustIcons = [CheckCircle2, ShieldCheck, BadgeCheck] as const;
const flowIcons = [FileText, Mail, MessageSquareText, CalendarCheck2] as const;

export function ContactPage() {
  const { contact, global } = siteContent;

  return (
    <>
      <PageHero hero={contact.hero} dark showBadge />

      <section className="bg-white py-16 md:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(320px,.94fr)] lg:items-start">
          <div>
            <SectionHeader
              kicker={contact.form.kicker}
              title={contact.form.sectionTitle}
              description={contact.form.lead}
            />
            <ContactForm />
          </div>

          <aside className="grid gap-4">
            <div className="border border-borderSoft bg-navy p-6 text-white shadow-lift md:p-7">
              <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">{contact.contactDesk.kicker}</p>
              <h2 className="mincho mt-4 text-2xl font-medium leading-[1.45] md:text-3xl">{contact.contactDesk.title}</h2>
              <p className="mt-4 text-sm leading-8 text-white/72">{contact.contactDesk.lead}</p>

              <dl className="mt-6 grid gap-3 text-sm">
                <div className="grid gap-2 border border-white/12 bg-white/[.04] p-4 sm:grid-cols-[92px_1fr]">
                  <dt className="flex items-center gap-2 font-black text-white">
                    <PhoneCall aria-hidden="true" className="h-4 w-4 text-accentGold" />
                    {contact.contactDesk.telLabel}
                  </dt>
                  <dd className="safe-break text-white/72">{global.company.tel}</dd>
                </div>
                <div className="grid gap-2 border border-white/12 bg-white/[.04] p-4 sm:grid-cols-[92px_1fr]">
                  <dt className="flex items-center gap-2 font-black text-white">
                    <Mail aria-hidden="true" className="h-4 w-4 text-accentGold" />
                    {contact.contactDesk.emailLabel}
                  </dt>
                  <dd className="safe-break text-white/72">{global.company.email}</dd>
                </div>
              </dl>
            </div>

            <div className="border border-borderSoft bg-pearl p-6 md:p-7">
              <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">{contact.certifiedPanel.kicker}</p>
              <h2 className="mt-4 text-xl font-black leading-8 text-ink">{contact.certifiedPanel.title}</h2>
              <p className="mt-4 text-sm leading-8 text-muted">{global.metrics[0].description}</p>
              <div className="mt-6">
                <CertificationBadge compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-warm py-16 md:py-24">
        <div className="container-site">
          <SectionHeader
            kicker={contact.trustSection.kicker}
            title={contact.trustSection.title}
            description={contact.hero.lead}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {contact.trustBadges.map((item, index) => {
              const Icon = trustIcons[index] ?? CheckCircle2;

              return (
                <article className="border border-borderSoft bg-white p-6 shadow-quiet md:p-7" key={item.title}>
                  <div className="grid h-12 w-12 place-items-center border border-brandBlue/15 bg-brandBlue/5 text-brandBlue">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <p className="mt-6 text-xs font-black uppercase tracking-[.16em] text-accentGold">Trust 0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-black leading-8 text-ink">{item.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-muted">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              kicker={contact.flowSection.kicker}
              title={contact.flowSection.title}
              description={contact.flowSection.lead}
            />
          </div>

          <ol className="grid gap-4 md:grid-cols-2">
            {contact.consultationFlow.map((step, index) => {
              const Icon = flowIcons[index] ?? FileText;

              return (
                <li className="border border-borderSoft bg-white p-6 shadow-quiet md:p-7" key={step.title}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center border border-accentGold/30 bg-accentGold/10 text-accentGold">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-black tracking-[.16em] text-accentGold">STEP 0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-black leading-8 text-ink">{step.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-muted">{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
}
