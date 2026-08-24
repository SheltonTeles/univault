import Card from "../ui/Card";
import "./ResourceCard.css";
import { useNavigate } from "react-router-dom";
function ResourceCard({ resource }) {

  const navigate = useNavigate();
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

      <button className="view-resource-button" onClick={() => navigate(`/resources/${resource.id}`)}>
        View Resource
      </button>

    </Card>
  );
}

export default ResourceCard;