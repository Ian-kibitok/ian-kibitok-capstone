from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float

from app.database.database import Base

class Item(Base):

    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)

    description = Column(String)

    price = Column(Float)