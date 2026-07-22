import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import PopularCourses from "../components/home/PopularCourses";
import RecentUploads from "../components/home/RecentUploads";
import HowItWorks from "../components/home/HowItWorks";


function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularCourses />
      <RecentUploads />
      <HowItWorks />
    </>
  );
}

export default Home;  