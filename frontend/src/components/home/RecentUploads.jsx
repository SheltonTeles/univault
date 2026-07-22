import Card from "../ui/Card";
import "./RecentUploads.css";


function RecentUploads() {

  const resources = [
    {
      title: "Data Structures Final Exam",
      course: "Data Structures",
      type: "Exam",
      year: "2025"
    },
    {
      title: "Database TPC Solution",
      course: "Database Systems",
      type: "TPC Solution",
      year: "2026"
    },
    {
      title: "Algorithms Lecture Notes",
      course: "Algorithms",
      type: "Lecture Notes",
      year: "2025"
    }
  ];


  return (
    <section className="recent-upload">

      <h2>
        Recent Uploads
      </h2>


      <div className="resource-grid">

        {resources.map((resource) => (

          <Card key={resource.title}>

            <h3>
              {resource.title}
            </h3>

            <p>
              {resource.course}
            </p>

            <div className="resource-info">

              <span>
                {resource.type}
              </span>

              <span>
                {resource.year}
              </span>

            </div>

          </Card>

        ))}

      </div>

    </section>
  );
}


export default RecentUploads;