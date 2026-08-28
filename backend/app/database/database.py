import os

from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker

from app.core.config import settings

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    if (
        settings.DATABASE_HOST
        and settings.DATABASE_PORT
        and settings.DATABASE_NAME
        and settings.DATABASE_USER
        and settings.DATABASE_PASSWORD
    ):
        DATABASE_URL = (
            f"postgresql://{settings.DATABASE_USER}:"
            f"{settings.DATABASE_PASSWORD}@"
            f"{settings.DATABASE_HOST}:"
            f"{settings.DATABASE_PORT}/"
            f"{settings.DATABASE_NAME}"
        )
    else:
        DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {},
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()