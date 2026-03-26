from fastapi import FastAPI, HTTPException, APIRouter


router = APIRouter()


@router.post("/verify", tags=["Verify"])
async def verify_text(text: str):
    return {"message": "Here we check your text.", "received": text}


@router.get("/Welcome", tags=["Welcome"])
async def Welcome():
    return {"Welcome to everyone"}
