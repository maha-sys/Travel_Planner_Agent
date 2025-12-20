import { useState } from "react";

export default function InputForm({ onGenerate, loading }) {
  const [form, setForm] = useState({
    budget: "",
    days: "",
    city: "",
    activities: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    if (!form.budget || !form.days || !form.city) {
      alert("Please fill all required fields");
      return;
    }
    onGenerate(form);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">Plan Your Trip</h2>
      <p className="text-sm text-gray-500 mb-4">
        Agent plans → validates budget → re-plans
      </p>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Budget (₹)</label>
          <input
            name="budget"
            className="w-full p-3 border rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Number of Days</label>
          <input
            name="days"
            className="w-full p-3 border rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium">City Preference</label>
          <input
            name="city"
            className="w-full p-3 border rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Activity Preferences</label>
          <input
            name="activities"
            className="w-full p-3 border rounded"
            placeholder="Food, adventure, culture..."
            onChange={handleChange}
          />
        </div>

        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-emerald-500 text-white py-3 rounded font-semibold hover:bg-emerald-600"
        >
          {loading ? "Planning..." : "Generate Plan"}
        </button>
      </div>
    </div>
  );
}
