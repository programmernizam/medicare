/* eslint-disable react/prop-types */
const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  return (
    <div className="py-[30] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-headingColor font-bold">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-normal text-textColor mt-4">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
