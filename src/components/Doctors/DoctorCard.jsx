/* eslint-disable react/prop-types */
import starIcon from "../../assets/images/Star";
import { BsArrowRight } from "react-icons/bs";
const DoctorCard = ({ doctor }) => {
  const {
    name,
    specialization,
    avgRating,
    totalRating,
    photo,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="" />
      </div>
      <h2 className="text-lg lg:text-[26px] lg:leading-9 font-bold text-headingColor mt-3 lg:mt-5">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded"></span>
      </div>
    </div>
  );
};

export default DoctorCard;
