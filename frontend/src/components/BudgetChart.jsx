export default function BudgetChart({ budget }) {
  const { total, used, remaining } = budget;

  // avoid NaN and clamp 0–100
  const rawPercent = total > 0 ? (used / total) * 100 : 0;
  const percent = Math.min(100, Math.max(0, rawPercent));
  const isOverBudget = used > total;

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-3">💰 Budget Summary</h2>

      <p>Total Budget: ₹{total}</p>
      <p>Estimated Spend: ₹{used}</p>
      <p
        className={
          isOverBudget
            ? "text-red-600 font-semibold"
            : "text-emerald-600 font-semibold"
        }
      >
        {isOverBudget
          ? `Over budget: ₹${used - total}`
          : `Remaining: ₹${remaining}`}
      </p>

      <div className="mt-3 bg-gray-200 rounded h-2 overflow-hidden">
        <div
          className={`${isOverBudget ? "bg-red-500" : "bg-emerald-500"} h-2`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
