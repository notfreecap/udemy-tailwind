const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row md:pb-10">
          <img className="scale-50" src="/images/logo.svg" alt="" />
          <div
            className="flex flex-col items-center justify-between flex-1 mb-10 
                space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue"
          >
            <div
              className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24
                    md:space-y-0"
            >
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a className="hover:text-strongCyan" href="#">
                    FAQs
                  </a>
                </div>
                <div>
                  <a className="hover:text-strongCyan" href="#">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24
                    md:space-y-0"
            >
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a className="hover:text-strongCyan" href="#">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a className="hover:text-strongCyan" href="#">
                    Press Kit
                  </a>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24
                    md:space-y-0"
            >
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a className="hover:text-strongCyan" href="#">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* social icons
          TODO: fix
           */}
          {/* <div className="flex justify-between w-32 py-1">
            <a href="#">
              <img src="/images/icon-facebook.svg" alt="" />
            </a>
            <a href="#">
              <img src="/images/icon-twitter.svg" alt="" />
            </a>
            <a href="#">
              <img src="/images/icon-instagram.svg" alt="" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
