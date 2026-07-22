import Card from "../ui/Card";
import "./Categories.css";

function Categories() {

  const categories = [
    {
      icon: "📚",
      title: "Past Exams",
      description: "Access previous exams and revision materials."
    },
    {
      icon: "📝",
      title: "TPC Solutions",
      description: "Find solutions and explanations for assignments."
    },
    {
      icon: "📖",
      title: "Lecture Notes",
      description: "Share and discover course notes."
    },
    {
      icon: "💻",
      title: "Programming",
      description: "Resources for programming courses."
    },
    {
      icon: "📊",
      title: "Mathematics",
      description: "Study materials for mathematics courses."
    }
  ];


  return (
    <section className="categories">

      <h2>
        Browse by Category
      </h2>


      <div className="category-grid">

        {categories.map((category) => (

          <Card key={category.title}>

            <div className="category-icon">
              {category.icon}
            </div>

            <h3>
              {category.title}
            </h3>

            <p>
              {category.description}
            </p>

          </Card>

        ))}

      </div>

    </section>
  );
}

export default Categories;