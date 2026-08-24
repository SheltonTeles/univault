import { useParams, useNavigate } from "react-router-dom";
import resources from "../data/resources";
import "./ResourceDetails.css";

function ResourceDetails (){
    const { id } = useParams();
    const navigate = useNavigate();
    const resource = resources.find(resource => String(resource.id)=== id);

    if (!resource) {
        return <p>Resource not found.</p>;
    }
    return (
        <main className="resource-details-page">
            <button className="back-button" onClick={() => navigate("/resources")}>
                ← Back to Resources
            </button>

            <h1>{resource.title}</h1>

            <p className="resource-course">
                {resource.course}
            </p>

            <div className="resource-meta">
                <span>{resource.type}</span>
                <span>{resource.year}</span>
                <span>⭐ {resource.rating}</span>
                <span>💬 {resource.comments}</span>
            </div>

            <p className="resource-uploader">
                Uploaded by Shelton
            </p>

            <section className="resource-preview">
                <h2>Resource preview</h2>

                <div className="preview-placeholder">
                    PDF preview
                </div>

                <button className="download-button">
                    Download Resource
                </button>
            </section>
        </main>
    );
}

export default ResourceDetails;