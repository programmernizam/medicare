import heroImg01 from "../../assets/images/hero-img01.png";
import heroImg02 from "../../assets/images/hero-img02.png";
import heroImg03 from "../../assets/images/hero-img03.png";
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
            {/* =====Hero Counter====== */}
            <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] text-headingColor font-bold">
                  30+
                </h2>
                <span className="w-100px h-2 bg-yellowColor rounded-full block -mt-[14px]"></span>
                <p className="text_para">Years Of Experience</p>
              </div>
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] text-headingColor font-bold">
                  15+
                </h2>
                <span className="w-100px h-2 bg-purpleColor rounded-full block -mt-[14px]"></span>
                <p className="text_para">Clinic Location</p>
              </div>
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] text-headingColor font-bold">
                  100%
                </h2>
                <span className="w-100px h-2 bg-irisBlueColor rounded-full block -mt-[14px]"></span>
                <p className="text_para">Patient Satisfaction</p>
              </div>
            </div>
          </div>
          {/* ========Hero Image======= */}
          <div className="flex gap-[30px] justify-end">
            <div>
              <img className="w-full" src={heroImg01} alt="Hero Image" />
            </div>
            <div className="mt-[30px]">
              <img
                className="w-full mb-[30px]"
                src={heroImg02}
                alt="Hero Image"
              />
              <img className="w-full" src={heroImg03} alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
