import SearchBar from "../components/ui/SearchBar";
import ResourceCard from "../components/resources/ResourceCard";
import CategoryFilter from "../components/resources/CategoryFilter";
import "./Resources.css";
import { useState } from "react";
import resources from "../data/resources";

function Resources() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");


const filteredResources = resources.filter((resource) => {
  const matchesSearch =
    resource.title.toLowerCase().includes(search.toLowerCase()) ||
    resource.course.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || resource.type === category;

  return matchesSearch && matchesCategory;
});


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

      <CategoryFilter 
        category={category}
        setCategory={setCategory}
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