export default function ItineraryView({ itinerary }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        📍 Itinerary – {itinerary.city}
      </h2>

      <div className="space-y-4">
        {itinerary.days.map((day) => (
          <div key={day.day_number} className="border-l-4 border-sky-400 pl-4">
            <h3 className="font-semibold">Day {day.day_number}</h3>

            {day.activities.map((act, idx) => (
              <p key={idx} className="text-sm text-gray-600">
                • {act.name} (₹{act.cost})
              </p>
            ))}

            <p className="text-xs mt-1 text-gray-500">
              Total: ₹{day.total_cost}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
