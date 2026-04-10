from fastapi.testclient import TestClient
import pytest
from sqlmodel import SQLModel
from backend.database import engine
import os


@pytest.fixture(autouse=True)
def clean_test_db():
    SQLModel.metadata.create_all(bind=engine)
    yield
    SQLModel.metadata.drop_all(bind=engine)


@pytest.fixture(scope="session", autouse=True)
def set_mock_env():
    os.environ["database_url"] = "sqlite:///test.db"
    os.environ["supabase_url"] = "http://localhost:54321"
    os.environ["supabase_key"] = "mock_test_key"


@pytest.fixture()
def client():
    from backend.main import app
    return TestClient(app)
