import { useState } from "react";
import InputForm from "./components/InputForm";
import ItineraryView from "./components/ItineraryView";
import BudgetChart from "./components/BudgetChart";
import ReplanningTimeline from "./components/ReplanningTimeline";
import { generatePlan } from "./api";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const handleGenerate = async (formData) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const data = await generatePlan(formData);
      console.log("Backend response:", data);
      setResponse(data);
    } catch (err) {
      console.error("Frontend error:", err);
      setError(err.message || "Unable to connect to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white p-6">
        <h1 className="text-3xl font-bold">Travel Planner Agent ✈️</h1>
        <p className="text-sm">Budget-aware agentic planner</p>
      </header>

      {/* Main */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left */}
        <InputForm onGenerate={handleGenerate} loading={loading} />

        {/* Right */}
        <div className="space-y-6">
          {loading && (
            <div className="bg-white p-6 rounded-xl shadow text-center animate-pulse">
              Planning your trip...
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-xl shadow">
              {error}
            </div>
          )}

          {response && response.success && response.itinerary && (
            <>
              <ItineraryView itinerary={response.itinerary} />

              <BudgetChart itinerary={response.itinerary} />

              <ReplanningTimeline iterations={response.iterations || []} />
            </>
          )}

          {response && !response.success && (
            <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl shadow">
              {response.message}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; 2024 Travel Planner Agent. All rights reserved.
      </footer>
    </div>
  );
}
