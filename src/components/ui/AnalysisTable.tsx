type Row = {
  label: string;
  value: string;
  note: string;
};

type AnalysisTableProps = {
  rows: readonly Row[];
  title?: string;
};

export function AnalysisTable({ rows, title = "改善インパクト分析" }: AnalysisTableProps) {
  return (
    <div className="overflow-hidden border border-borderSoft bg-white shadow-quiet">
      <div className="border-b border-borderSoft px-6 py-4">
        <h3 className="text-sm font-black text-ink">{title}</h3>
      </div>
      <table className="w-full border-collapse text-left">
        <thead className="sr-only">
          <tr>
            <th scope="col">指標</th>
            <th scope="col">改善値</th>
            <th scope="col">改善判断</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr className="grid grid-cols-[1fr_auto] gap-4 px-6 py-4 md:grid-cols-[1fr_120px_140px]" key={row.label}>
              <th className="text-sm font-bold text-ink" scope="row">{row.label}</th>
              <td className="text-sm font-black text-dataTeal">{row.value}</td>
              <td className="text-xs font-bold text-muted">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
