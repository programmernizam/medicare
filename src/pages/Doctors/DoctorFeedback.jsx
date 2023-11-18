import avatarImg from "../../assets/images/avatar-icon.png";
import formateDate from "../../utils/formateDate";
const DoctorFeedback = () => {
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (274)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatarImg} alt="" className="w-full" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Rasel Mia
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formateDate("02-14-2023")}
              </p>
              <p className="text_para mt-3 font-medium text-[15px]">
                Good Service, Highly Recommended!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorFeedback;
