// import "./AddResourceForm.css";
import { useState } from "react";
import { createResource} from "../../services/api";

function AddResourceForm() {

  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const newResource = await createResource({
            title: title,
            course: course,
            type: type,
            year: Number(year),
        });

        console.log("Resource created: ", newResource);
    } catch (error) {
        console.error(error);
    }
  };
  
  return (
    <div>
      <h2>Add a Resource</h2>

      <form onSubmit = {handleSubmit}>

        <input
          type="text"
          placeholder="Resource title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select type</option>
          <option value="Exam">Exam</option>
          <option value="Notes">Notes</option>
          <option value="Homework">Homework</option>
        </select>

        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <button type="submit">
          Add Resource
        </button>

      </form>
    </div>
  );
}

export default AddResourceForm;