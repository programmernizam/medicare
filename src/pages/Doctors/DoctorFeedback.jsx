import avatarImg from "../../assets/images/avatar-icon.png";
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorFeedback;
