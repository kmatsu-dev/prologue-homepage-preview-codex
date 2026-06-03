type ProcessStepsProps = {
  steps: readonly string[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-3 md:grid-cols-5">
      {steps.map((step, index) => (
        <li className="border border-borderSoft bg-white p-5" key={step}>
          <span className="text-xs font-black tracking-[.16em] text-accentGold">0{index + 1}</span>
          <p className="mt-3 text-sm font-black text-ink">{step}</p>
        </li>
      ))}
    </ol>
  );
}
