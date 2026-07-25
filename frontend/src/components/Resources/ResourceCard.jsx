import Card from "../ui/Card";
import "./ResourceCard.css";


function ResourceCard({ resource }) {

  return (

    <Card>

      <h3>
        {resource.title}
      </h3>


      <p>
        {resource.course}
      </p>


      <div className="resource-details">

        <span>
          {resource.type}
        </span>

        <span>
          {resource.year}
        </span>

      </div>


      <div className="resource-rating">

        ⭐ {resource.rating}

        <span>
          💬 {resource.comments}
        </span>

      </div>


    </Card>

  );

}


export default ResourceCard;