import os
from dotenv import load_dotenv

load_dotenv()

OPENTRIPMAP_API_KEY = os.getenv("OPENTRIPMAP_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
