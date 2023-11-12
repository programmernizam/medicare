import faqImage from "../../assets/images/faq-img.png";
import FaqList from "../../components/Faq/FaqList";
const FaqSection = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center gap-[50px] lg:gap-0">
          <div className="hidden w-1/2 md:block">
            <img src={faqImage} alt="" />
          </div>
          <FaqList />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
