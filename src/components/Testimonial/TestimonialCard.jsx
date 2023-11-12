import { HiStar } from "react-icons/hi";
import patientAvatar from "../../assets/images/patient-avatar.png";
const TestimonialCard = () => {
  return (
    <div className="py-[30px] px-5 rounded-[13px]">
      <div className="flex items-center gap-[13px]">
        <img src={patientAvatar} alt="" />
        <div>
          <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
            Nizam Uddin
          </h4>
          <div className="flex items-center gap-[2px]">
            <HiStar className="text-yellowColor w-[18px] h-5" />
            <HiStar className="text-yellowColor w-[18px] h-5" />
            <HiStar className="text-yellowColor w-[18px] h-5" />
            <HiStar className="text-yellowColor w-[18px] h-5" />
            <HiStar className="text-yellowColor w-[18px] h-5" />
          </div>
        </div>
      </div>
      <p className="text-[16px] leading-7 mt-4 text-textColor font-normal">
        &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        asperiores dignissimos facere? Fugiat quidem, blanditiis iste aliquam
        corporis aut obcaecati sunt sapiente ipsum expedita voluptatum. Possimus
        consequuntur sunt porro. Minus!&quot;
      </p>
    </div>
  );
};

export default TestimonialCard;
