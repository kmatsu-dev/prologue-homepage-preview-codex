import { siteContent } from "../../data/siteContent";
import { ButtonLink } from "./ButtonLink";

type CtaBandProps = {
  title?: string;
  body?: string;
};

export function CtaBand({
  title = "Indeed運用の課題を、解析から整理しませんか。",
  body = "現在の運用状況や採用課題を伺い、改善の方向性を整理します。正式な送信先・計測は公開前に差し替えます。",
}: CtaBandProps) {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="container-site grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[.18em] text-accentGold">Contact</p>
          <h2 className="mincho mt-4 text-3xl font-medium leading-[1.45] md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">{body}</p>
        </div>
        <ButtonLink className="w-full md:w-auto" {...siteContent.global.ctas.primary} />
      </div>
    </section>
  );
}
