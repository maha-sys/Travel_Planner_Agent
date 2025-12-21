export default function ReplanningTimeline({ iterations = [] }) {
  if (!iterations.length) {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">🤖 Agent Reasoning</h2>
        <p className="text-gray-500 text-sm">
          No replanning was required. The plan fit within your budget 🎉
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">🤖 Agent Reasoning</h2>

      <div className="space-y-3">
        {iterations.map((step) => (
          <div key={step.iteration} className="p-3 border rounded bg-slate-50">
            <p className="font-medium">
              Step {step.iteration}: {step.action}
            </p>
            <p className="text-sm text-gray-600">{step.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
