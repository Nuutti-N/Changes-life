from jose import jwt
from typing import Union, Any
from datetime import datetime, timedelta
from passlib.context import CryptContext
import os
from dotenv import load_dotenv
load_dotenv()

access_token_Expire = 30
Refresh_token = 60 * 24 * 7
Algorithm = "HS256"
jwt_key = os.environ["jwt_key"]
jwt_refresh_key = os.environ["jwt_refresh_key"]

# machine (cryptcontext) use a special way to scramble calle brycpt and if you find old ways update automatically
context = CryptContext(schemes=["brycpt"], deprecated="auto")


def hash_password(password: str):
    return context.hash(password)


def verify_password(plain_password: str, hashed_password: str):
    return context.verify(plain_password, hashed_password)


def create_access_token(subject: Union[str, Any], expires_delta: int = None):
    if expires_delta is not None:
        expires_delta = datetime.now() + expires_delta
    else:
        expires_delta = datetime.now() + timedelta(minutes=access_token_Expire)
    to_encode = {"exp": expires_delta, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, jwt_key, Algorithm)
    return encoded_jwt


def create_refresh_token(subject: Union[str, Any], expires_delta: int = None):
    if expires_delta is not None:
        expires_delta = datetime.now() + expires_delta
    else:
        expires_delta = datetime.now() + timedelta(minutes=Refresh_token)
    to_encode = {"exp": expires_delta, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, jwt_refresh_key, Algorithm)
    return encoded_jwt
