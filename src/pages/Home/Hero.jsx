const Hero = () => {
  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* ======Hero Content======= */}
          <div>
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-extrabold md:text-[60px] md:leading-[70px]">
                We help patients live a healthy, longer life.
              </h1>
              <p className="text_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis animi magni autem distinctio corrupti earum nam aut
                accusantium dicta amet, praesentium, hic nisi vel veritatis
                consequuntur! Repellendus repellat similique temporibus.
              </p>
              <button className="btn">Request an Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
