"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="container relative mx-auto p-6">
        <div
          className="flex items-center justify-between
      space-x-20 my-6"
        >
          {/* logo */}
          <div className="z-30">
            <img
              src={`${
                menuOpen
                  ? "/images/logo-bookmark-footer.svg"
                  : "/images/logo-bookmark.svg"
              } `}
              alt=""
            />
          </div>

          {/* menu items */}
          <div
            className="hidden items-center space-x-10 uppercase
          text-grayshBlue md:flex"
          >
            <a className="tracking-widest hover:text-softRed" href="#features">
              Features
            </a>
            <a className="tracking-widest hover:text-softRed" href="#download">
              Download
            </a>
            <a className="tracking-widest hover:text-softRed" href="#faq">
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
          {/* hamburger button */}
          <button
            className={`z-30 block md:hidden focus:outline-none hamburger first-letter 
            ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* menu */}
        <div
          className={`fixed inset-0 z-20 flex-col items-center self-end
        w-full h-full min-h-screen px-6 py-1 pt-24 pb-4 tracking-tighter text-white
        uppercase divide-y divide-gray-500 opacity-90 bg-vaeryDarkBlue  
        ${menuOpen ? "flex" : "hidden"}`}
        >
          <div className="w-full py-3 text-center">
            <a href="#features" className="block hover:text-softRed">
              Features
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#download" className="block hover:text-softRed">
              download
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#faq" className="block hover:text-softRed">
              faq
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#" className="block hover:text-softRed">
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

      {/* features heading */}
      <section id="features">
        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-grayshBlue">
            Our aim is to make it quicj and easy for you to access your favorite
            websites. Yout bookmarks sync between your devices so you can access
            them on the go.
          </p>
        </div>
      </section>

      {/* Featured tabs */}
      <section id="tabs">
        {/* tabs container */}
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="bg-tabs"></div>
          <div
            className="flex flex-col justify-center max-w-xl mx-auto mb-6
          border-b md:space-x-10 md:flex-row"
          >
            {/* tab 1 */}
            <div
              className={`flex justify-center text-center text-gray-600
            border-b md:border-b-0 hover:text-softRed md:w-1/3 cursor-pointer"
              data-target="panel-1`}
              onClick={() => setTab(1)}
            >
              <div
                className={`py-5 ${tab === 1 && "border-b-4 border-softRed"}`}
              >
                Simple Bookmarking
              </div>
            </div>
            {/* tab 2 */}
            <div
              className="flex justify-center text-center text-gray-600
            border-b md:border-b-0 hover:text-softRed md:w-1/3 tab cursor-pointer"
              data-target="panel-2"
              onClick={() => setTab(2)}
            >
              <div
                className={`py-5 ${tab === 2 && "border-b-4 border-softRed"}`}
              >
                Speedy Searching
              </div>
            </div>
            {/* tab 3 */}
            <div
              className="flex justify-center text-center text-gray-600
            border-b md:border-b-0 hover:text-softRed md:w-1/3 tab cursor-pointer"
              data-target="panel-3"
              onClick={() => setTab(3)}
            >
              <div
                className={`py-5 ${tab === 3 && "border-b-4 border-softRed"}`}
              >
                Easy Sharing
              </div>
            </div>
          </div>

          {/* panels */}
          <section id="panels container mx-auto">
            {/* panel 1 */}
            {tab === 1 && (
              <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
                {/* image */}
                <div className="flex justify-center md:w-1/2">
                  <img
                    className="relative z-10"
                    src="/images/illustration-features-tab-1.svg"
                    alt=""
                  />
                </div>
                {/* panel content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3
                    className="mt-32 text-3xl font-semibold text-center
                md:mt-0 md:text-left"
                  >
                    Bookmark in one click
                  </h3>
                  <p className="max-w-md text-center text-grayshBlue md:text-left">
                    Organize yout bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favorite sites.
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a
                      className="px-6 py-3 mt-4 font-semibold text-white
                  border-2 border-white rounded-lg md:inline-flex
                  bg-softBlue hover:bg-white hover:text-softBlue
                  hover:border-softBlue hover:border-2"
                      href="#"
                    >
                      More info
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* panel 2 */}
            {tab === 2 && (
              <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
                {/* image */}
                <div className="flex justify-center md:w-1/2">
                  <img
                    className="relative z-10"
                    src="/images/illustration-features-tab-2.svg"
                    alt=""
                  />
                </div>
                {/* panel content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3
                    className="mt-14 text-3xl font-semibold text-center
                md:mt-0 md:text-left"
                  >
                    Intelligent search
                  </h3>
                  <p className="max-w-md text-center text-grayshBlue md:text-left">
                    Organize yout bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favorite sites.
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a
                      className="px-6 py-3 mt-4 font-semibold text-white
                  border-2 border-white rounded-lg md:inline-flex
                  bg-softBlue hover:bg-white hover:text-softBlue
                  hover:border-softBlue hover:border-2"
                      href="#"
                    >
                      More info
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* panel 3 */}
            {tab === 3 && (
              <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
                {/* image */}
                <div className="flex justify-center md:w-1/2">
                  <img
                    className="relative z-10"
                    src="/images/illustration-features-tab-3.svg"
                    alt=""
                  />
                </div>
                {/* panel content */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                  <h3
                    className="mt-14 text-3xl font-semibold text-center
                md:mt-0 md:text-left"
                  >
                    Share your bookmarks
                  </h3>
                  <p className="max-w-md text-center text-grayshBlue md:text-left">
                    Organize yout bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favorite sites.
                  </p>
                  <div className="mx-auto md:mx-0">
                    <a
                      className="px-6 py-3 mt-4 font-semibold text-white
                  border-2 border-white rounded-lg md:inline-flex
                  bg-softBlue hover:bg-white hover:text-softBlue
                  hover:border-softBlue hover:border-2"
                      href="#"
                    >
                      More info
                    </a>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </section>

      {/* download heading */}
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center">
            Download the extension
          </h2>
          <p className="max-w-lg mx-auto text-center text-grayshBlue">
            We've got more browsers in the pipeline. Please do let us know if
            you've favorite you'd like us to prioritize.
          </p>
        </div>
      </section>

      {/* download boxes */}
      <section className="py-32">
        <div
          className="container relative flex flex-col items-center max-w-5xl
            mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row"
        >
          {/* box 1 */}
          <div
            className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg 
          shadow-lg md:w-1/3"
          >
            {/* image */}
            <div className="flex justify-center">
              <img src="/images/logo-chrome.svg" alt="" />
            </div>
            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className="text-gray-400">Minimum Version 62</p>

            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                className="block w-full py-3 text-white duration-200
              border-2 rounded-lg bg-softBlue hover:text-softBlue
              hover:bg-white border-softBlue"
                href="#"
              >
                Add & Install extension
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            {/* box 2 */}
            <div
              className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg 
          shadow-lg md:mt-8"
            >
              {/* image */}
              <div className="flex justify-center">
                <img src="/images/logo-firefox.svg" alt="" />
              </div>
              <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
              <p className="text-gray-400">Minimum Version 55</p>

              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  className="block w-full py-3 text-white duration-200
              border-2 rounded-lg bg-softBlue hover:text-softBlue
              hover:bg-white border-softBlue"
                  href="#"
                >
                  Add & Install extension
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            {/* box 2 */}
            <div
              className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg 
          shadow-lg md:mt-16"
            >
              {/* image */}
              <div className="flex justify-center">
                <img src="/images/logo-opera.svg" alt="" />
              </div>
              <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
              <p className="text-gray-400">Minimum Version 46</p>

              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  className="block w-full py-3 text-white duration-200
              border-2 rounded-lg bg-softBlue hover:text-softBlue
              hover:bg-white border-softBlue"
                  href="#"
                >
                  Add & Install extension
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ heading */}
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequenly Asked Questions
          </h2>
          <p className="max-w-lg px-6 mx-auto text-center text-grayshBlue">
            Here are some of out FAQs. If you hace any other question you'd like
            answered please feel free to email us.
          </p>
        </div>
      </section>

      {/* section accordion */}
      <section>
        <div className="container mx-auto px-6 mb-32">
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            {/* tab 1 */}
            <div className="py-1 border-b outline-none group" tabIndex={1}>
              <div
                className="flex items-center justify-between py-3 text-gray-500
              transition duration-500 cusor-pointer group-ease"
              >
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What is Bookmark?
                </div>
                <div
                  className="transition duration-500 ease group-focus:-rotate-180
                group-focus:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              {/* tab content */}
              <div
                className="overflow-hidden transition duration-500 group-focus:max-h-screen
              max-h-0 ease"
              >
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
                  blanditiis odio molestiae officia ut, assumenda amet, dolore
                  quasi fugit maxime qui pariatur consequatur natus quisquam?
                  Error id quidem dicta aliquid!
                </p>
              </div>
            </div>
            {/* tab 2 */}
            <div className="py-1 border-b outline-none group" tabIndex={2}>
              <div
                className="flex items-center justify-between py-3 text-gray-500
              transition duration-500 cusor-pointer group-ease"
              >
                <div className="transition duration-500 ease group-hover:text-red-500">
                  How can I request a new browser?
                </div>
                <div
                  className="transition duration-500 ease group-focus:-rotate-180
                group-focus:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              {/* tab content */}
              <div
                className="overflow-hidden transition duration-500 group-focus:max-h-screen
              max-h-0 ease"
              >
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  facilis fuga possimus qui ipsam perferendis sequi molestias
                  provident? Pariatur porro fugiat sunt illo temporibus quam
                  voluptate aliquam provident, dignissimos vitae!
                </p>
              </div>
            </div>
            {/* tab 3 */}
            <div className="py-1 border-b outline-none group" tabIndex={3}>
              <div
                className="flex items-center justify-between py-3 text-gray-500
              transition duration-500 cusor-pointer group-ease"
              >
                <div className="transition duration-500 ease group-hover:text-red-500">
                  Is there a mobile app?
                </div>
                <div
                  className="transition duration-500 ease group-focus:-rotate-180
                group-focus:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              {/* tab content */}
              <div
                className="overflow-hidden transition duration-500 group-focus:max-h-screen
              max-h-0 ease"
              >
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero deleniti quam molestiae cumque, quibusdam, corporis
                  obcaecati quidem, praesentium cupiditate odit ipsa ex ratione
                  voluptates. Accusamus rerum similique inventore ea? Quas.
                </p>
              </div>
            </div>
            {/* tab 2 */}
            <div className="py-1 border-b outline-none group" tabIndex={4}>
              <div
                className="flex items-center justify-between py-3 text-gray-500
              transition duration-500 cusor-pointer group-ease"
              >
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What about other Chromium browsers
                </div>
                <div
                  className="transition duration-500 ease group-focus:-rotate-180
                group-focus:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              {/* tab content */}
              <div
                className="overflow-hidden transition duration-500 group-focus:max-h-screen
              max-h-0 ease"
              >
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dignissimos libero voluptate architecto maiores! Quis illo
                  minus quisquam sunt provident exercitationem maiores, ea modi
                  rem corrupti, veritatis hic debitis? Enim, similique?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* new letter section */}
      <section className="bg-softBlue">
        <div className="max-w-lg mx-auto py-24">
          <p
            className="mb-6 text-lg tracking-widest text-center 
          text-white uppercase"
          >
            35,000+ already joined
          </p>
          <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
            Stay up-to-date with what we're doing
          </h2>
          {/* form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col items-start justify-center
          max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 mdLspace-x-4
          md:px-0"
          >
            <div
              className="flex flex-col justify-between items-center mx-auto md:flex-row
                  md:mx-0"
            >
              <input
                type="text"
                className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg
                  border-1 border-white focus:outline-none md:mr-3 md:mb-0"
                placeholder="Enter your email address"
              />
              <button
                className="inline-flex px-6 py-3 font-semibold text-center
                text-white duration-200 transform rounded-lg cursor-pointer
                focus:outline-none bg-softRed hover:opacity-90"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-vaeryDarkBlue">
        <div
          className="container flex flex-col items-center justify-between 
            mx-auto space-y-16 px-6 md:flex-row md:space-y-0"
        >
          {/* logo menu */}
          <div
            className="flex flex-col items-center justify-between space-y-8
              text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayshBlue"
          >
            <img
              className="mb-1"
              src="/images/logo-bookmark-footer.svg"
              alt=""
            />
            <a className="uppercase hover:text-softRed" href="#">
              Features
            </a>
            <a className="uppercase hover:text-softRed" href="#">
              Download
            </a>
            <a className="uppercase hover:text-softRed" href="#">
              FAQ
            </a>
          </div>
          {/* social container */}
          <div className="flex space-x-10">
            <a href="#">
              <img className="h6" src="/images/icon-facebook.svg" alt="" />
            </a>
            <a href="#">
              <img className="h6" src="/images/icon-twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
