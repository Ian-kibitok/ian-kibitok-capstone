from pydantic import BaseModel

class ItemCreate(BaseModel):

    name: str

    description: str

    price: float


class ItemResponse(ItemCreate):

    id: int

    class Config:
        from_attributes = True