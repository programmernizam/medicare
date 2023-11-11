import { Link } from "react-router-dom";
import avatarIcon from "../../assets/images/avatar-icon.png";
import featureImg from "../../assets/images/feature-img.png";
import videoIcon from "../../assets/images/video-icon.png";
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
            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pb-[26px] rounded-[10px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-semibold">
                    Tue, 24
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-semibold">
                    10:00
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 ;g:px-[9px]">
                  <img src={videoIcon} alt="" />
                </span>
              </div>
              <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading=[8px] lg:text-[12px] leading-4 text-irisBlueColor font-medium mt-2 lg:mt-4 rounded-full">
                Consultation
              </div>
              <div className="flex items-center gap-6px lg:gap-[10px] mt-2 lg:mt-[18px]">
                <img src={avatarIcon} alt="" />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-bold text-headingColor">
                  John Deo
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
