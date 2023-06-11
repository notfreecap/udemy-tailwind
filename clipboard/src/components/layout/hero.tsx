const Hero = () => {
  return (
    //Hero section
    <section className="section-container mb-40 px-10 pt-16">
      <img className="mx-auto my-16" src="/images/logo.svg" alt="" />

      <h3>A history of everything you copy</h3>

      <p className="max-2-3xl mx-auto mb-10 text-2xl text-grayishBlue">
        Clipboard allows you to tack and organize everything you copy. Instantly
        acces your clipbloard on all your devices.
      </p>

      <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:space-y-0 md:space-x-4 md:flex-row">
        <button className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
          Download for iOS
        </button>
        <button className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
          Download for windows
        </button>
      </div>
    </section>
  );
};

export default Hero;
