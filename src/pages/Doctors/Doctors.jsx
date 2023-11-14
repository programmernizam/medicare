const Doctors = () => {
  return (
    <section className="bg-[#fff9ea]">
      <div className="container text-center">
        <h2 className="heading">Find a Doctor</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex justify-between items-center">
          <input
            type="search"
            placeholder="Search Doctor"
            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
          />
          <button className="btn mt-0 rounded-[0px] rounded-r-md">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
