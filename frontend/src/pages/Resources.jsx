import SearchBar from "../components/ui/SearchBar";
import ResourceCard from "../components/resources/ResourceCard";
import CategoryFilter from "../components/resources/CategoryFilter";
import "./Resources.css";
import { useState } from "react";
import resources from "../data/resources";
import SortSelect from "../components/resources/SortSelect";

function Resources() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const[sortBy, setSortBy] = useState("newest");


const filteredResources = resources.filter((resource) => {
  const matchesSearch =
    resource.title.toLowerCase().includes(search.toLowerCase()) ||
    resource.course.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || resource.type === category;

  return matchesSearch && matchesCategory;
});

const sortedResources = [...filteredResources].sort((a,b)=>{
  if(sortBy === "newest"){
    return Number(b.year) - Number(a.year);
  }

  if(sortBy === "rating"){
    return b.rating - a.rating;
  }

  if(sortBy === "comments"){
    return b.comments - a.comments;
  }

  return 0;
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

      <SortSelect
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className="resources-grid">

        {sortedResources.map((resource) => (

          <ResourceCard
            key={resource.id}
            resource={resource}
          />

        ))}

      </div>


    </main>
  );
}


export default Resources;