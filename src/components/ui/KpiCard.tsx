import type { Metric } from "../../data/siteContent";

type KpiCardProps = Metric & {
  tone?: "light" | "dark";
};

export function KpiCard({ value, label, description, tone = "light" }: KpiCardProps) {
  const isDark = tone === "dark";

  return (
    <article className={`border p-6 ${isDark ? "border-white/15 bg-white/5 text-white" : "border-borderSoft bg-white text-ink"}`}>
      <p className={`mincho safe-break text-4xl font-medium leading-none ${isDark ? "text-white" : "text-brandBlue"}`}>{value}</p>
      <h3 className="safe-break mt-3 text-sm font-black">{label}</h3>
      {description ? <p className={`safe-break mt-2 text-xs leading-6 ${isDark ? "text-white/62" : "text-muted"}`}>{description}</p> : null}
    </article>
  );
}
