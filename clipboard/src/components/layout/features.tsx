const Features = () => {
  return (
    <section>
      <div className="section-container my-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          <div className="md:w-1/2">
            <img
              className="md:absolute top-0 right-[50%]"
              src="/images/image-computer.png"
              alt="Computer image"
            />
          </div>
          <div
            className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left
          md:pl-16 md:w-1/2"
          >
            <div>
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Quick search
              </h5>
              <p className="max-2-md text-grayishBlue">
                Easily search snippets by content, categoty, web address,
                application and more.
              </p>
            </div>

            <div>
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                iCloud Sync
              </h5>
              <p className="max-2-md text-grayishBlue">
                Instanly saves and syncs snippets across all your devices.
              </p>
            </div>

            <div>
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Completely History
              </h5>
              <p className="max-2-md text-grayishBlue">
                Retrive any snippets from the first moment you started using the
                app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
