from fastapi import FastAPI
from app.core.schemas import TravelRequest, TravelResponse
from app.agents.planner_agent import TravelPlannerAgent

app = FastAPI(title="Travel Planner Agent")

agent = TravelPlannerAgent()

@app.post("/plan", response_model=TravelResponse)
def generate_plan(request: TravelRequest):
    result = agent.run(request)
    return result
