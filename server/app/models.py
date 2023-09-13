from sqlalchemy import Column, Integer, String, Enum
from app.database import Base


class Paths(Base):
    __tablename__ = "paths"

    id = Column(Integer, primary_key=True, index=True)
    type = Column(Enum("Air", "Sea", "Land", name="path_type", numname=True))
