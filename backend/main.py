
from backend.config import settings
from fastapi.middleware.cors import CORSMiddleware
from backend.logger import logger
from fastapi import FastAPI, Depends, HTTPException, status, Request
from fastapi.responses import JSONResponse
from sqlmodel import select, SQLModel
from backend.models import User, UserOut
from backend.database import engine, get_session
from backend.users import get_current_user, router as users_router
from backend.routers import router as routers
from slowapi.errors import RateLimitExceeded
from backend.rating_limiter import limiter

app = FastAPI()


# Add CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        # react, I will add later it, in this project, and then customer can see and buy things.
        "http://localhost:3000",
        "http://mydomainsoon.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(users_router)
app.include_router(routers)

app.state.limiter = limiter


@app.exception_handler(RateLimitExceeded)
async def rate_limit_handler(request: Request, exc: RateLimitExceeded):
    return JSONResponse(
        status_code=429,
        content={"detail": "Too many request. Please slow down and try again later."}
    )


@app.on_event("startup")
async def on_startup():
    logger.info("Application starting up")
    logger.info("Database tables created successfully")
