import { useState } from "react";

export default function InputForm({ onGenerate, loading }) {
  const [form, setForm] = useState({
    budget: "",
    days: "",
    city: "",
    preferences: "", // ✅ renamed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = () => {
    if (!form.budget || !form.days || !form.city) {
      alert("Please fill all required fields");
      return;
    }

    // ✅ MATCHES BACKEND SCHEMA
    const payload = {
      budget: Number(form.budget),
      days: Number(form.days),
      city: form.city.trim(),
      preferences: form.preferences
        ? form.preferences.split(",").map((p) => p.trim().toLowerCase())
        : [],
    };

    onGenerate(payload);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Plan Your Trip</h2>

      <input
        type="number"
        name="budget"
        placeholder="Budget"
        className="w-full p-3 border rounded mb-3"
        onChange={handleChange}
      />

      <input
        type="number"
        name="days"
        placeholder="Number of days"
        className="w-full p-3 border rounded mb-3"
        onChange={handleChange}
      />

      <input
        name="city"
        placeholder="City"
        className="w-full p-3 border rounded mb-3"
        onChange={handleChange}
      />

      <input
        name="preferences"
        placeholder="food, culture, adventure"
        className="w-full p-3 border rounded mb-4"
        onChange={handleChange}
      />

      <button
        onClick={submit}
        disabled={loading}
        className="w-full bg-emerald-500 text-white py-3 rounded"
      >
        {loading ? "Planning..." : "Generate Plan"}
      </button>
    </div>
  );
}