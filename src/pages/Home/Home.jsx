import About from "../../components/About/About";
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
    </div>
  );
};

export default Home;
