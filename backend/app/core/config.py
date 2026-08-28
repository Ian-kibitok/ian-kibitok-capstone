from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    APP_NAME: str = "Ian Lagat Capstone API"

    VERSION: str = "1.0.0"

    DATABASE_HOST: str

    DATABASE_PORT: int

    DATABASE_NAME: str

    DATABASE_USER: str

    DATABASE_PASSWORD: str

    class Config:
        env_file = ".env"


settings = Settings()