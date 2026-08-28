from typing import Optional

from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    APP_NAME: str = "Ian Lagat Capstone API"

    VERSION: str = "1.0.0"

    DATABASE_URL: Optional[str] = None

    DATABASE_HOST: Optional[str] = None

    DATABASE_PORT: Optional[int] = None

    DATABASE_NAME: Optional[str] = None

    DATABASE_USER: Optional[str] = None

    DATABASE_PASSWORD: Optional[str] = None

    class Config:
        env_file = ".env"


settings = Settings()