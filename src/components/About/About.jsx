import { Link } from "react-router-dom";
import aboutCardImg from "../../assets/images/about-card.png";
import aboutImg from "../../assets/images/about.png";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* =====About Image===== */}
          <div className="w-3/4 relative lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="w-[200px] md:[300px] absolute bottom-4 z-20 right-[-30%] md:right-[7%] lg:right-[30%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* =====About Content==== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text_para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              numquam, quaerat eaque ratione maiores, nobis officia placeat
              sapiente dicta ullam beatae, pariatur assumenda autem ipsa dolore?
              Voluptatum possimus eligendi temporibus.
            </p>
            <p className="text_para mt-[30px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              numquam, quaerat eaque ratione maiores, nobis officia placeat
              sapiente dicta ullam beatae, pariatur assumenda autem ipsa dolore?
              Voluptatum possimus eligendi temporibus.
            </p>
            <Link to={"/"}>
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
