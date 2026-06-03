import { FormEvent, useState } from "react";
import { siteContent } from "../../data/siteContent";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { contact, global } = siteContent;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="border border-borderSoft bg-white p-6 shadow-quiet md:p-8" onSubmit={handleSubmit}>
      <div className="mb-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">{contact.form.kicker}</p>
          <h2 className="mt-2 text-xl font-black text-ink">{contact.form.title}</h2>
          <p className="mt-2 text-sm leading-7 text-muted">{contact.form.lead}</p>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {contact.fields.map((field) => (
          <label className={field.type === "textarea" ? "md:col-span-2" : ""} key={field.name}>
            <span className="mb-2 block text-sm font-bold text-ink">
              {field.label}
              <em className={`ml-2 not-italic ${field.required ? "text-brandBlue" : "text-muted"}`}>{field.required ? "必須" : "任意"}</em>
            </span>
            {field.type === "textarea" ? (
              <textarea
                className="min-h-36 w-full resize-y border border-borderSoft bg-warm px-4 py-3 outline-none transition placeholder:text-muted/60 focus:border-brandBlue"
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
              />
            ) : field.type === "select" ? (
              <select
                className="h-12 w-full border border-borderSoft bg-warm px-4 outline-none transition focus:border-brandBlue"
                name={field.name}
                required={field.required}
              >
                {field.options?.map((option) => <option key={option}>{option}</option>)}
              </select>
            ) : (
              <input
                className="h-12 w-full border border-borderSoft bg-warm px-4 outline-none transition placeholder:text-muted/60 focus:border-brandBlue"
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                type={field.type}
              />
            )}
          </label>
        ))}
      </div>
      <label className="mt-6 flex gap-3 text-sm leading-7 text-muted">
        <input className="mt-1 h-4 w-4 accent-brandBlue" required type="checkbox" />
        <span>
          <a className="font-bold text-brandBlue underline decoration-brandBlue/35 underline-offset-4 hover:text-blueHover" href={global.company.privacyPolicyUrl}>
            {contact.form.privacyLabel}
          </a>
          {contact.form.privacySuffix}
        </span>
      </label>
      <button className="mt-6 inline-flex min-h-13 w-full items-center justify-center bg-brandBlue px-6 py-3 text-sm font-black text-white transition hover:bg-blueHover md:w-auto" type="submit">
        {contact.form.submitLabel}
      </button>
      {submitted ? <p className="mt-5 border border-dataTeal/25 bg-dataTeal/5 p-4 text-sm font-bold text-dataTeal">{contact.thanksMessage}</p> : null}
    </form>
  );
}
