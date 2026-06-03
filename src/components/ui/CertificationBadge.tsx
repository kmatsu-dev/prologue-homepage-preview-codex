import { siteContent } from "../../data/siteContent";

type CertificationBadgeProps = {
  compact?: boolean;
  dark?: boolean;
};

export function CertificationBadge({ compact = false, dark = false }: CertificationBadgeProps) {
  const labelParts = siteContent.global.brand.certificationLabel.split(" / ");

  return (
    <div
      className={`grid w-full max-w-full grid-cols-[56px_minmax(0,1fr)] items-center gap-4 border px-4 py-4 sm:inline-grid sm:w-auto sm:grid-cols-[72px_minmax(0,1fr)] ${
        dark ? "border-white/16 bg-white/[.04] text-white" : "border-borderSoft bg-white text-ink"
      }`}
    >
      <img
        alt="Indeed Platinum Partner ロゴ"
        className={`${compact ? "h-12 w-12" : "h-14 w-14 sm:h-16 sm:w-16"} shrink-0 bg-white object-contain`}
        src={siteContent.global.brand.badgePath}
      />
      <div className="min-w-0">
        <p className={`safe-break font-bold leading-6 ${compact ? "text-sm" : "text-sm md:text-base"}`}>
          {labelParts.map((part, index) => (
            <span className="block md:inline" key={part}>
              {index > 0 ? <span className="hidden md:inline">/ </span> : null}
              {part}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
