import { Link } from "react-router-dom";
import featureImg from "../../assets/images/feature-img.png";
const FeatureSection = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* ======Feature Content======= */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get virtual treatment <br /> anytime
            </h2>
            <ul>
              <li className="text_para">
                1. Schedule the appointment directly.
              </li>
              <li className="text_para">
                2. Search your physicians here, and contact there office.
              </li>
              <li className="text_para">
                3. View your physicians who are accepting new patients, use the
                online Scheduling tool to select an appointment time.
              </li>
            </ul>
            <Link to={"/"}>
              <button className="btn">Learn More</button>
            </Link>
          </div>
          {/* ======Feature Image====== */}
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} className="w-3/4" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
