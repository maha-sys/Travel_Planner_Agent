# Travel Planner Agent
    A budget-aware, agentic travel planning application that generates personalized itineraries based on 
    user preferences, validates them against budget constraints, and explains its reasoning clearly.


**Project Overview**

Planning a trip within a budget is time-consuming and often requires multiple revisions.
This project uses an agent-based AI approach to:
- Generate travel itineraries.
- Validate them against a given budget.
- Re-plan if constraints are violated
- Show the reasoning behind each step.
The system is designed with a modern frontend and a scalable backend architecture.


**Features**

- Budget-aware travel itinerary generation.
- Agent reasoning display (Plan → Validate → Re-plan).
- Clean, responsive UI suitable for demos and judges.
- Modular architecture (frontend & backend separated).
- Backend-ready API integration.

**Tech Stack**

-> Frontend

      React
      Vite
      Tailwind CSS
      JavaScript
      Axios

-> Backend 

      Python
      FastAPI
      LLM (Mixtral via Groq API)
      OpenTripMap API

**Architecture**

      React Frontend
            ↓
      FastAPI Backend
            ↓
      AI Planner Agent
            ↓
      Budget Validator
            ↓
      Re-planner (if needed)

**User Inputs**
1. Budget
2. Number of days
3. City preference
4. Activity preferences

**Output**

- Day-wise itinerary 
- Budget summary (used & remaining)
- Agent reasoning steps

**Project Structure**

travel-planner-agent/

├── frontend/   # React + Vite + Tailwind UI

├── backend/    # FastAPI + AI agents

└── README.md

**Running the Frontend**

cd frontend

npm install

npm run dev

The app will run at:

http://localhost:5173

**Backend Integration**

The frontend connects to the backend via a single API layer (api.js).

Replacing mock data with real backend responses enables full integration without UI changes.

**Use Cases**

- Budget-conscious travelers.
- Smart travel planning assistants.
- AI agent demonstrations.

**Future Enhancements**
- Real-time backend integration.
- Charts and visual budget analytics.
- Authentication and saved itineraries.
- Deployment to cloud platforms.
