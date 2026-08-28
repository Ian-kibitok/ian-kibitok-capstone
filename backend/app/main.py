from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.items import router

from app.core.config import settings

from app.core.logger import logger

app = FastAPI(

    title=settings.APP_NAME,

    version=settings.VERSION

)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/")

def root():

    logger.info("Home endpoint accessed")

    return {

        "message": settings.APP_NAME

    }


@app.get("/health")

def health():

    return {

        "status":"healthy"

    }

from app.database.database import Base, engine



Base.metadata.create_all(bind=engine)