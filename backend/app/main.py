from fastapi import FastAPI

app = FastAPI(
    title="Ian Lagat Capstone API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Welcome to Ian Lagat Capstone Backend"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }