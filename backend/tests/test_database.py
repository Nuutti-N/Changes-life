from fastapi.testclient import TestClient
from backend.main import app

clien = TestClient(app)
