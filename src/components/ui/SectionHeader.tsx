type SectionHeaderProps = {
  kicker?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeader({ kicker, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? "mx-auto max-w-3xl text-center" : "grid gap-5 lg:grid-cols-[220px_1fr]"}`}>
      {kicker ? <p className="text-xs font-semibold tracking-[.18em] text-accentGold">{kicker}</p> : null}
      <div>
        <h2 className="safe-break text-balance text-3xl font-bold leading-[1.38] text-ink md:text-5xl">{title}</h2>
        {description ? <p className="mt-4 max-w-3xl text-sm leading-8 text-muted md:text-base">{description}</p> : null}
      </div>
    </div>
  );
}
