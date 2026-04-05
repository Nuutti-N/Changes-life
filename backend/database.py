from sqlmodel import SQLModel, create_engine, Session
import os
from .config import settings
from dotenv import load_dotenv
load_dotenv()


engine = create_engine(settings.database_url, echo=True)
SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session
