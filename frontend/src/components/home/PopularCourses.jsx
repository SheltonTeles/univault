import Card from "../ui/Card";
import "./PopularCourses.css";


function PopularCourses() {

  const courses = [
    {
      name: "Data Structures",
      faculty: "Computer Science",
      resources: 120
    },
    {
      name: "Algorithms",
      faculty: "Computer Science",
      resources: 95
    },
    {
      name: "Database Systems",
      faculty: "Computer Science",
      resources: 80
    },
    {
      name: "Calculus",
      faculty: "Mathematics",
      resources: 150
    }
  ];


  return (
    <section className="popular-courses">

      <h2>
        Popular Courses
      </h2>


      <div className="course-grid">

        {courses.map((course) => (

          <Card key={course.name}>

            <h3>
              {course.name}
            </h3>

            <p>
              {course.faculty}
            </p>

            <span>
              📚 {course.resources} resources
            </span>

          </Card>

        ))}

      </div>

    </section>
  );
}


export default PopularCourses;