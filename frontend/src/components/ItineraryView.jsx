export default function ItineraryView({ itinerary }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">📍 Itinerary</h2>

      <div className="space-y-4">
        {itinerary.map((item) => (
          <div
            key={item.day}
            className="border-l-4 border-sky-400 pl-4"
          >
            <h3 className="font-semibold">Day {item.day}</h3>
            <p className="text-sm text-gray-600">{item.activity}</p>
            <span className="inline-block mt-1 text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded">
              ₹{item.cost}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
