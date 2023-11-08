import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import icon1 from "../../assets/images/icon01.png";
import icon2 from "../../assets/images/icon02.png";
import icon3 from "../../assets/images/icon03.png";
const HowItWork = () => {
  return (
    <section>
      <div className="container">
        {/* =====Top Section==== */}
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">
            Providing the best medical services
          </h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health system offers unmatched,
            expert health care.
          </p>
        </div>
        {/* =====Bottom Section===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {/* ===Card=== */}
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon1} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-bold text-center">
                Find a Doctor
              </h2>
              <p className="text-[16px] leading-7 text-center font-normal mt-4 text-textColor">
                World-class care for everyone. Our health system offers
                unmatched, expert health care.
              </p>
              <Link
                to={"/doctor"}
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
          {/* ===Card=== */}
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon2} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-bold text-center">
                Find a Location
              </h2>
              <p className="text-[16px] leading-7 text-center font-normal mt-4 text-textColor">
                World-class care for everyone. Our health system offers
                unmatched, expert health care.
              </p>
              <Link
                to={"/doctor"}
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
          {/* ===Card=== */}
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon3} alt="" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-bold text-center">
                Book Appointment
              </h2>
              <p className="text-[16px] leading-7 text-center font-normal mt-4 text-textColor">
                World-class care for everyone. Our health system offers
                unmatched, expert health care.
              </p>
              <Link
                to={"/doctor"}
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
