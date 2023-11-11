import { Link } from "react-router-dom";

const FeatureSection = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* Feature Content */}
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
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
