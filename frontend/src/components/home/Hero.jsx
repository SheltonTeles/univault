import Button from "../ui/Button";
import "../home/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>Everything students need
          <span> in one place</span>
        </h1>
        <p>
          Past exams, TPC solutions, lecture notes and slides —
          organized by course, professor and academic year.
        </p>

        <div className="hero-buttons">
          <Button>
            Browse Resources
          </Button>

          <Button variant="secondary">
            Upload Resources
          </Button>

        </div>

      </div>
      
    </section>
  );
}

export default Hero;