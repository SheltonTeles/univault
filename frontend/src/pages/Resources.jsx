import SearchBar from "../components/ui/SearchBar";
import ResourceCard from "../components/resources/ResourceCard";
import "./Resources.css";
import { useState } from "react";

function Resources() {

  const [search, setSearch] = useState("");

  const resources = [
    {
      title: "Data Structures Final Exam",
      course: "Computer Science",
      type: "Exam",
      year: "2025",
      rating: 4.8,
      comments: 12
    },
    {
      title: "Database Lecture Notes",
      course: "Database Systems",
      type: "Notes",
      year: "2026",
      rating: 4.5,
      comments: 8
    },
    {
      title: "Algorithms TPC Solution",
      course: "Algorithms",
      type: "Homework",
      year: "2025",
      rating: 4.9,
      comments: 20
    }
  ];


  const filteredResources = resources.filter((resource) =>
  resource.title.toLowerCase().includes(search.toLowerCase()) ||
  resource.course.toLowerCase().includes(search.toLowerCase())
);


  return (
    <main className="resources-page">

      <h1>
        Resources
      </h1>


      <p>
        Discover study materials shared by students.
      </p>


      <SearchBar
        placeholder="Search resources..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <div className="resources-grid">

        {filteredResources.map((resource) => (

          <ResourceCard
            key={resource.title}
            resource={resource}
          />

        ))}

      </div>


    </main>
  );
}


export default Resources;