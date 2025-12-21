export default function BudgetChart({ itinerary }) {
  const total = itinerary.total_cost + itinerary.remaining_budget;
  const used = itinerary.total_cost;
  const remaining = itinerary.remaining_budget;

  const percent = Math.min(100, (used / total) * 100);
  const isOverBudget = remaining < 0;

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-3">💰 Budget Summary</h2>

      <p>Total Budget: ₹{total}</p>
      <p>Used: ₹{used}</p>

      <p className={isOverBudget ? "text-red-600" : "text-emerald-600"}>
        {isOverBudget
          ? `Over budget by ₹${Math.abs(remaining)}`
          : `Remaining ₹${remaining}`}
      </p>

      <div className="mt-3 bg-gray-200 rounded h-2">
        <div
          className={`h-2 ${isOverBudget ? "bg-red-500" : "bg-emerald-500"}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
