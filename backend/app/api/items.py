from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.item_schema import ItemCreate
from app.services.item_service import get_items
from app.services.item_service import create_item

router = APIRouter()

@router.get("/items")
def all_items(db: Session = Depends(get_db)):
    return get_items(db)

@router.post("/items")
def add_item(
    item: ItemCreate,
    db: Session = Depends(get_db)
):
    return create_item(db, item)