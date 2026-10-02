from pydantic import BaseModel

class ResourceCreate(BaseModel):
    title: str
    course: str
    type: str
    year: int

class ResourceResponse(BaseModel):
    id: int
    title: str
    course: str
    type: str
    year: int
    rating: float
    comments: int

    class Config:
        from_attributes = True