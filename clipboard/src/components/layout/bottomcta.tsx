const BottomCTA = () => {
  return (
    <section>
      <div className="section-container my-20">
        <h3>Clipboard for iOS and Windows</h3>
        <p className="section-content mb-10">
          Available for free on the App Store. Download for Mac, iOs or Windows,
          sync with iCloud and you're ready to start adding to your clipboard.
        </p>

        <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:space-y-0 md:space-x-4 md:flex-row">
          <button className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
            Download for iOS
          </button>
          <button className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
            Download for windows
          </button>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
