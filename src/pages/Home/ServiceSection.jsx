import ServiceList from "../../components/Services/ServiceList";

const ServiceSection = () => {
  return (
    <section>
      <div className="container">
        {/* ====Service Top==== */}
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our Medical Services</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health system offers unmatched,
            expert health care.
          </p>
        </div>
        {/* =====Service List==== */}
        <ServiceList />
      </div>
    </section>
  );
};

export default ServiceSection;
