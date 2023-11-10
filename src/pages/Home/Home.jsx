import About from "../../components/About/About";
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
    </div>
  );
};

export default Home;
