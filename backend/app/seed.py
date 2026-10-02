from .database import SessionLocal, engine, Base
from .models import Resource

Base.metadata.create_all(bind=engine)

db = SessionLocal()

resources = [
    Resource(
        title="Data Structures Final Exam",
        course="Data Structures and Algorithms",
        type="Exam",
        year=2025,
        rating=4.8,
        comments=12
    ),

    Resource(
        title="Database Lecture Notes",
        course="Database Systems",
        type="Lecture Notes",
        year=2026,
        rating=4.5,
        comments=8
    ),

    Resource(
        title="Algorithms Homework Solution",
        course="Algorithms",
        type="Homework",
        year=2026,
        rating=4.7,
        comments=15
    )
]

db.add_all(resources)
db.commit()
db.close()

print("Resources added successfully.")