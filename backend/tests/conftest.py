import os
from fastapi.testclient import TestClient
import pytest
from dotenv import load_dotenv
from unittest.mock import patch, MagicMock
import unittest


load_dotenv()
os.environ["test_database_url"] = os.getenv("test_database_url")
os.environ["supabase_url"] = "http://localhost:54321"
os.environ["supabase_key"] = "mock_test_key"
os.environ["gemini_api_key"] = "gemini_key"
os.environ["jwt_key"] = "jwt"
os.environ["jwt_refresh_key"] = "refresh"


@pytest.fixture(autouse=True)
def clean_test_db():
    from sqlmodel import SQLModel
    from backend.database import engine
    SQLModel.metadata.create_all(bind=engine)
    yield
    SQLModel.metadata.drop_all(bind=engine)


@pytest.fixture()
def client():
    from backend.main import app
    return TestClient(app)


@pytest.fixture()
def auth_token(client):
    client.post(
        "/signup", json={"username": "testuser", "password": "testpass"})
    response = client.post(
        "/login", data={"username": "testuser", "password": "testpass"})
    return response.json()["access_token"], response.json()["refresh_token"]
