const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="text-center heading">Contact Us</h2>
        <p className="mb-8 lg:mb-16 text-center font-light text_para">
          Got a technical issue? Want to send us about beta feature? Let us
          know.
        </p>
        <form action="">
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form_input mt-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
            <input
              type="subject"
              id="subject"
              placeholder="Let us know how can we help you"
              className="form_input mt-1"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
