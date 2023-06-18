export default function Home() {
  return (
    <main>
      <nav className="container relative mx-auto p-6">
        <div
          className="flex items-center justify-between
      space-x-20 my-6"
        >
          {/* logo */}
          <div className="z-30">
            <img src="/images/logo-bookmark.svg" alt="" />
          </div>

          {/* menu items */}
          <div
            className="hidden items-center space-x-10 uppercase
          text-grayshBlue md:flex"
          >
            <a className="tracking-widest hover:text-softRed" href="#">
              Features
            </a>
            <a className="tracking-widest hover:text-softRed" href="#">
              Download
            </a>
            <a className="tracking-widest hover:text-softRed" href="#">
              FAQ
            </a>
            <a
              className="px-8 py-2 text-white bg-softRed border-2 border-softRed
            rounded-lg shadow-md hover:text-softRed hover:bg-white transition duration-200
            hover:shadow-b-xs hover:shadow-softRed"
              href="#"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <section>
        <div
          className="container flex flex-col-reverse mx-auto p-6 lg:flex-row
        lg:mb-0 "
        >
          {/* content */}
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1
              className="text-3xl font-semibold text-center lg:text-6xl
            lg:text-left"
            >
              A Simple Bookmark Manager
            </h1>
            <p
              className="max-w-md mx-auto text-lg text-center text-gray-400
            lg:text-2xl lg:text-left lg:mt-0 lg:mx-0"
            >
              A clean and simple interface to organize your favorite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            {/* buttons container */}
            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
              <a
                className="p-4 text-sm font-semibold text-white bg-softBlue rounded
                shadow-md border-softBlue md:text-base hover:bg-white hover:text-softBlue
                border-2 hover:-translate-y-0.5 transition duration-200"
                href="#"
              >
                Get It On Chrome
              </a>
              <a
                className="p-4 text-sm font-semibold text-black bg-gray-300 rounded
                shadow-md border-gray-300 md:text-base hover:bg-white hover:text-gray-600
                border-2 hover:-translate-y-0.5 transition duration-200"
                href="#"
              >
                Get It On Firefox
              </a>
            </div>
          </div>
          {/* image */}
          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="bg-hero"></div>
            <img
              className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
              src="/images/illustration-hero.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}
