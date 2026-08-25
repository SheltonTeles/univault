from fastapi import FastAPI

app = FastAPI()

@app.get("/api/health")
def health_check():
    return {"status": "ok"}

@app.get("/api/resources")
def get_resources():
    return [
        {
            "id": 1,
            "title": "Data Structures Final Exam",
            "course": "Computer Science",
            "type": "Exam",
            "year": "2025",
            "rating": 4.8,
            "comments": 12
        },

        {
            "id": 2,
            "title": "Database Lecture Notes",
            "course": "Database Systems",
            "type": "Notes",
            "year": "2026",
            "rating": 4.5,
            "comments": 8
        },

        {
            "id": 3,
            "title": "Algorithms TPC Solution",
            "course": "Algorithms",
            "type": "TPC",
            "year": "2025",
            "rating": 4.9,
            "comments": 20
        }
    ]