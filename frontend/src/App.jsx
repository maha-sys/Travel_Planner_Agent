import { useState } from "react";
import InputForm from "./components/InputForm";
import ItineraryView from "./components/ItineraryView";
import BudgetChart from "./components/BudgetChart";
import ReplanningTimeline from "./components/ReplanningTimeline";
import { generatePlan } from "./api";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleGenerate = async (formData) => {
    setLoading(true);
    const data = await generatePlan(formData);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white p-6">
        <h1 className="text-3xl font-bold">Travel Planner Agent ✈️</h1>
        <p className="text-sm">
          Budget-aware agentic planner
        </p>
      </header>

      {/* Main */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left */}
        <InputForm onGenerate={handleGenerate} loading={loading} />

        {/* Right */}
        <div className="space-y-6">
          {loading && (
            <div className="bg-white p-6 rounded-xl shadow animate-pulse text-center">
              Planning your trip...
            </div>
          )}

          {result && (
            <>
              <ItineraryView itinerary={result.itinerary} />
              <BudgetChart budget={result.budget} />
              <ReplanningTimeline reasoning={result.reasoning} />
            </>
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
