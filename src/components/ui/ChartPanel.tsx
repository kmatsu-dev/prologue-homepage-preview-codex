import { analysisChart } from "../../data/siteContent";

type ChartPanelProps = {
  title?: string;
};

export function ChartPanel({ title = "応募推移" }: ChartPanelProps) {
  return (
    <div className="border border-borderSoft bg-white p-6 shadow-quiet" aria-label={`${title}の棒グラフ`} role="group">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-sm font-black text-ink">{title}</h3>
        <span className="text-xs font-bold text-muted">過去6か月</span>
      </div>
      <div className="flex h-48 items-end gap-3 border-b border-l border-line px-3 pb-3">
        {analysisChart.map((item) => (
          <div className="flex flex-1 flex-col items-center gap-2" key={item.label}>
            <div className="flex h-36 w-full items-end justify-center gap-1">
              <span className="block w-3 bg-dataTeal" style={{ height: `${item.primary}%` }} />
              <span className="block w-3 bg-platinum" style={{ height: `${item.secondary}%` }} />
            </div>
            <span className="text-[10px] font-bold text-muted">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-5 text-xs font-bold text-muted">
        <span className="inline-flex items-center gap-2"><i className="h-2 w-2 bg-dataTeal" />応募数</span>
        <span className="inline-flex items-center gap-2"><i className="h-2 w-2 bg-platinum" />採用数</span>
      </div>
      <table className="sr-only">
        <caption>{title} 過去6か月</caption>
        <thead>
          <tr>
            <th scope="col">月</th>
            <th scope="col">応募数</th>
            <th scope="col">採用数</th>
          </tr>
        </thead>
        <tbody>
          {analysisChart.map((item) => (
            <tr key={item.label}>
              <th scope="row">{item.label}</th>
              <td>{item.primary}</td>
              <td>{item.secondary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
