export function StatBar({ label, value, max = 150, color = "bg-red-500" }) {
  const percent = Math.min(100, (value / max) * 100);

  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-600 font-medium">{label}</span>
        <span className="font-bold text-slate-900 tabular-nums">{value}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
