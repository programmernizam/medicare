import Testimonial from "../../components/Testimonial/Testimonial";

const TestimonialSection = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">What our patient says</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health system offers unmatched,
            expert health care.
          </p>
        </div>
        <Testimonial />
      </div>
    </section>
  );
};

export default TestimonialSection;
