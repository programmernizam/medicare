import signUpImg from "../assets/images/signup.gif";
const SignUp = () => {
  return (
    <section className="px-5 lg:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image box */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signUpImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          {/* Signup Form */}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
