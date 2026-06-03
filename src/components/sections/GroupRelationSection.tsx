import { siteContent } from "../../data/siteContent";

const groupRoles = [
  { title: "Indeedに集中", body: "運用リソースを散らさず、Indeedの成果指標を深く見続けます。" },
  { title: "判断が速い", body: "求人ごとの数字から、原稿・予算・応募後フローの改善順を決めます。" },
  { title: "周辺課題も接続", body: "必要に応じて、関連会社の求人広告・WEB広告・採用広報領域へつなげます。" },
];

export function GroupRelationSection() {
  const { groupRelation } = siteContent.home;

  return (
    <section className="bg-white py-16 md:py-24" id="group">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold tracking-[.18em] text-accentGold">グループ内での役割</p>
          <h2 className="mt-5 text-3xl font-bold leading-[1.35] text-ink md:text-5xl">{groupRelation.title}</h2>
        </div>
        <div>
          <p className="text-sm leading-8 text-muted md:text-base">{groupRelation.body}</p>
          <div className="mt-8 border-y border-borderSoft">
            {groupRoles.map((item, index) => (
              <article className="grid gap-4 border-b border-borderSoft py-5 last:border-b-0 md:grid-cols-[72px_1fr]" key={item.title}>
                <span className="text-xs font-semibold text-muted">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
