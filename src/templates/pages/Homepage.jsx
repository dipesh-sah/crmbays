import React from "react";
import Benefits from "../components/common/Benefits";
import DevSolution from "../components/common/DevSolution";
import HeroSection from "../components/common/HeroSection";
import WorkProcess from "../components/common/WorkProcess";
import HomepageForm from "../components/common/HomepageForm";
import Carousel from "../components/common/DevServices";
import RecentPosts from "../components/common/RecentPosts";
function Homepage() {
  return (
    <div className="homepage-body">
      <HeroSection />
      <Benefits />
      <WorkProcess />
      <Carousel />
      <DevSolution />
      <RecentPosts />
      <HomepageForm />
    </div>
  );
}

export default Homepage;
