
export const generatePlan = async (formData) => {
  // mock delay
  await new Promise((res) => setTimeout(res, 1500));

  return {
    itinerary: [
      { day: 1, activity: "City sightseeing & food walk", cost: 3000 },
      { day: 2, activity: "Museum visit & cultural tour", cost: 2500 },
      { day: 3, activity: "Nature park & shopping", cost: 3500 },
    ],
    budget: {
      total: formData.budget,
      used: 9000,
      remaining: formData.budget - 9000,
    },
    reasoning: [
      { step: "Plan", detail: "Generated initial itinerary from preferences" },
      { step: "Validate", detail: "Checked activities against budget" },
      { step: "Re-plan", detail: "Optimized costs to fit budget" },
    ],
  };
};
