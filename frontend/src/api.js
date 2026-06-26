const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function generatePlan(formData) {
  console.log("Sending to backend:", formData);

  const rawPrefs = formData.preferences ?? formData.activities ?? [];

  let preferences = [];
  if (Array.isArray(rawPrefs)) {
    preferences = rawPrefs
      .map((p) => String(p).trim().toLowerCase())
      .filter(Boolean);
  } else if (typeof rawPrefs === "string") {
    preferences = rawPrefs
      .split(",")
      .map((p) => p.trim().toLowerCase())
      .filter(Boolean);
  }

  const payload = {
    budget: Number(formData.budget),
    num_days: Number(formData.days),
    city: formData.city,
    preferences,
  };

  console.log("Payload:", payload);

  const response = await fetch(`${API_BASE_URL}/plan`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    try {
      const err = JSON.parse(text);
      throw new Error(err.detail || "Backend error");
    } catch {
      throw new Error(text || "Backend error");
    }
  }

  return await response.json();
}
