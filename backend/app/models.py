from sqlalchemy import Column, Integer, String, Float
from .database import Base


class Resource(Base):
    __tablename__ = "resources"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    course = Column(String, nullable=False)
    type = Column(String, nullable=False)
    year = Column(Integer, nullable=False)
    rating = Column(Float, default=0)
    comments = Column(Integer, default=0)