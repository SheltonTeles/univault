import Card from "../ui/Card";
import "./HowItWorks.css";

function HowItWorks() {

  const steps = [
    {
      number: "01",
      title: "Upload",
      description: "Share exams, notes, Homework solutions, and useful study materials"
    },
    {
      number: "02",
      title: "Share",
      description: "Help classmates discover resources organized by course, year and university"
    },
    {
      number: "03",
      title: "Learn",
      description: "Study smarter using materials shared by the student community"
    }
  ];



  return(
    <section className="how-it-works">

      <h2>How UniVault Works</h2>

      <div className="steps-grid">
        {steps.map((step) => (
          <Card key={step.number}>

          <div className="step-number">
            {step.numer}
          </div>
          
          <h3>
            {step.title}
          </h3>

          <p>
            {step.description}
          </p>
          </Card>
        ))}       
      </div>

    </section>
  );

}

export default HowItWorks;