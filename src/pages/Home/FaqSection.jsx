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
          <div className="w-full md:w-1/2">
            <h2 className="heading">Most questions by our beloved patients</h2>
            <FaqList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
