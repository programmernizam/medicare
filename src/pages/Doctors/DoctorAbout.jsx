import formateDate from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      {/* About */}
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-[24px] text-irisBlueColor font-bold leading-9">
            MD. Nizam Uddin
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae
          explicabo consequuntur deleniti voluptatem eveniet quam debitis sint
          a! Dignissimos cumque eaque facilis reiciendis nemo quisquam eligendi
          cum quibusdam fuga?
        </p>
      </div>
      {/* Education */}
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("09-13-2014")} - {formateDate("09-13-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("07-04-2010")} - {formateDate("07-04-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
        </ul>
      </div>
      {/* Experience */}
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-[15px] text-yellowColor leading-6 font-semibold">
              {formateDate("08-06-2010")} - {formateDate("09-13-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-[15px] text-yellowColor leading-6 font-semibold">
              {formateDate("08-06-2010")} - {formateDate("09-13-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
