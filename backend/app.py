from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, String
from sqlalchemy.orm import sessionmaker, declarative_base

# App

app = FastAPI()

# Allow frontend to talk to backend (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database setup
DATABASE_URL = "sqlite:///./kizora.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# Model
class User(Base):
    __tablename__ = "users"

    username = Column(String, primary_key=True, index=True)
    password = Column(String)

# Create table
Base.metadata.create_all(bind=engine)

# Request model
class UserRequest(BaseModel):
    username: str
    password: str

# REGISTER
@app.post("/register")
def register(user: UserRequest):
    db = SessionLocal()

    existing = db.query(User).filter(User.username == user.username).first()
    if existing:
        return {"status": "error", "message": "User already exists"}

    new_user = User(username=user.username, password=user.password)
    db.add(new_user)
    db.commit()

    return {"status": "success", "message": "User created"}

# LOGIN
@app.post("/login")
def login(user: UserRequest):
    db = SessionLocal()

    existing = db.query(User).filter(User.username == user.username).first()

    if existing and existing.password == user.password:
        return {"status": "success", "message": "Login successful"}

    return {"status": "error", "message": "Invalid credentials"}

# ROOT
@app.get("/")
def home():
    return {"message": "KIZORA backend running with database"}