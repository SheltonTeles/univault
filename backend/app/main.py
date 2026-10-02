from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base, SessionLocal
from . import models
from .schemas import ResourceResponse, ResourceCreate

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health_check():
    return {"status": "ok"}

@app.get("/api/resources", response_model=list[ResourceResponse])
def get_resources():
    db = SessionLocal()

    resources = db.query(models.Resource).all()

    db.close()

    return resources


@app.post("/api/resources", response_model=ResourceResponse)
def create_resource(resource: ResourceCreate):
    db = SessionLocal()

    new_resource = models.Resource(
        title=resource.title,
        course=resource.course,
        type=resource.type,
        year=resource.year
    )

    db.add(new_resource)
    db.commit()
    db.refresh(new_resource)

    db.close()

    return new_resource