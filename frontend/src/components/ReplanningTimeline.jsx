export default function ReplanningTimeline({ reasoning }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">🤖 Agent Reasoning</h2>

      <div className="space-y-3">
        {reasoning.map((step, index) => (
          <div
            key={index}
            className="p-3 border rounded bg-slate-50"
          >
            <p className="font-medium">{step.step}</p>
            <p className="text-sm text-gray-600">{step.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
