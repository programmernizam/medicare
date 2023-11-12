import About from "../../components/About/About";
import DoctorsSection from "./DoctorsSection";
import FaqSection from "./FaqSection";
import FeatureSection from "./FeatureSection";
import Hero from "./Hero";
import HowItWork from "./HowItWork";
import ServiceSection from "./ServiceSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <HowItWork />
      <About />
      <ServiceSection />
      <FeatureSection />
      <DoctorsSection />
      <FaqSection />
    </div>
  );
};

export default Home;
