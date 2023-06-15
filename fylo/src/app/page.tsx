"use client";

import { useState } from "react";

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState<string>();
  const updateTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setCurrentTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
    }
  };

  return (
    <main>
      {/* header */}
      <div className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">
        {/* dynamic logo */}
        <div
          className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat
        h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"
        ></div>
        {/* menu */}
        <div
          className="flex items-center justify-center space-x-4 md:space-x-10
        md:absolute top-12 right-10"
        >
          <a className="hover:text-accentCyan" href="#features">
            Features
          </a>
          <a className="hover:text-accentCyan" href="#testimonials">
            Testimonials
          </a>

          {/* dark/light mode button */}
          <button
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100
          dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200
          dark:focus:ring-gray-700 rounded-lg text-sm p-2"
            onClick={updateTheme}
          >
            {currentTheme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* hero section */}
      <section
        className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat
      bg-contain bg-bottom"
      >
        <div className="container mx-auto px-6 text-center md:pt-20 md:pb-52">
          <img
            className="mx-auto"
            src="/images/illustration-intro.png"
            alt=""
          />

          <h1
            className="mx-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal
          mt-14 md:text-4xl"
          >
            All your files in one secure location, assessible anywhere.
          </h1>
          <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with firends,
            family and co-workers.
          </p>
          <button className="p-3 font-semibold rounded-full w-52 bg-accentCyan hover:scale-95">
            Get Started
          </button>
        </div>
      </section>

      {/* features section */}
      <section id="features" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
        <div className="container mx-auto px-6 pb-32">
          {/* first row */}
          <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
            {/* item 1 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <img src="/images/icon-access-anywhere.svg" alt="" />
              </div>
              <h3 className="text-xl font-bold">
                Access you files from everywhere
              </h3>
              <p className="max-w-md">
                The ability to use a smartphone, tablet or computer to acces
                your account means your files allow you everywhere.
              </p>
            </div>
            {/* item 2 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <img src="/images/icon-security.svg" alt="" />
              </div>
              <h3 className="text-xl font-bold">Security you can trust</h3>
              <p className="max-w-md">
                2-factor authentication and user-controlled encryption are just
                a cuple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>
          {/* second row */}
          <div className="flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0">
            {/* item 3 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <img src="/images/icon-collaboration.svg" alt="" />
              </div>
              <h3 className="text-xl font-bold">
                Access you files from everywhere
              </h3>
              <p className="max-w-md">
                The ability to use a smartphone, tablet or computer to acces
                your account means your files allow you everywhere.
              </p>
            </div>
            {/* item 4 */}
            <div className="flex flex-col items-center space-y-2 md:w-1/2">
              <div className="flex items-center justify-center h-24 mb-6">
                <img src="/images/icon-any-file.svg" alt="" />
              </div>
              <h3 className="text-xl font-bold">Security you can trust</h3>
              <p className="max-w-md">
                2-factor authentication and user-controlled encryption are just
                a cuple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* productive section */}
      <section className="bg-white dark:bg-darkBlue">
        <div
          className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row
              md:space-x-60"
        >
          {/* image */}
          <div className="md:w-1/2">
            <img
              src="images/illustration-stay-productive.png"
              className="mb-10"
              alt=""
            />
          </div>

          {/* content */}
          <div className="flex flex-col items-center md:w-1/2">
            <div className="flex flex-col space-y-5">
              <h4 className="max-w-dm text-xl font-bold md:text-4xl">
                Stay productive, wherever you are
              </h4>
              <p className="text-md md:text-lg">
                Never let location be an issue when accessing yout files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="text-md md:text-lg">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
              {/* link */}
              <div className="block mt-4">
                <a
                  className="border-b border-accentCyan text-accentCyan"
                  href="#"
                >
                  See how Fylo works
                  <img
                    className="inline ml-1"
                    src="/images/icon-arrow.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials section */}
      <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
        <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
          {/* boxes container */}
          <div
            className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0
              md:space-x-12"
          >
            {/* quotes image */}
            <img
              className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
              src="images/bg-quotes.png"
              alt=""
            />
            {/* box 1 */}
            <div
              className="flex flex-col p-10 space-y-6 rounded-lg md:w-1/3 bg-gray-100 
            dark:bg-darkBlue3"
            >
              <p className="text-sm leading-5 md:text-lg">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              {/* customer info */}
              <div className="flex space-x-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/images/profile-1.jpg"
                  alt=""
                />
                <div>
                  <h5 className="text-sm font-semibold">Satish Patel</h5>
                  <p className="text-xs cont font-extralight">
                    Founder & CEO. Huddle
                  </p>
                </div>
              </div>
            </div>
            {/* box 2 */}
            <div
              className="flex flex-col p-10 space-y-6 rounded-lg md:w-1/3 bg-gray-100 
            dark:bg-darkBlue3"
            >
              <p className="text-sm leading-5 md:text-lg">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              {/* customer info */}
              <div className="flex space-x-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/images/profile-2.jpg"
                  alt=""
                />
                <div>
                  <h5 className="text-sm font-semibold">Bruce McKenzie</h5>
                  <p className="text-xs cont font-extralight">
                    Founder & CEO. Huddle 2
                  </p>
                </div>
              </div>
            </div>
            {/* box 3 */}
            <div
              className="flex flex-col p-10 space-y-6 rounded-lg md:w-1/3 bg-gray-100 
            dark:bg-darkBlue3"
            >
              <p className="text-sm leading-5 md:text-lg">
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              {/* customer info */}
              <div className="flex space-x-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/images/profile-3.jpg"
                  alt=""
                />
                <div>
                  <h5 className="text-sm font-semibold">Eva Boyd</h5>
                  <p className="text-xs cont font-extralight">
                    Founder & CEO. Huddle 3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* early access section */}
      <section
        id="early-access"
        className="relative px-6 dark:bg-darkBlue2 md:px-0"
      >
        <div
          className="container relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6
text-center rounded-lg bg-gray-200 dark:bg-darkBlue1 md:px-16"
        >
          <h5 className="text-2xl font-bold">Get early access today</h5>
          <p className="text-sm">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, out support team
            would be happy to help you.
          </p>
          <div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <div className="w-full md:flex-1">
              <input
                className="w-full px-10 py-3 rounded-full focus:outline-none"
                type="text"
                placeholder="email@example.com"
              />
            </div>
            <button
              className="w-full p-3 px-6 rounded-full bg-accentCyan
            md:w-56 hover:scale-95 transition font-semibold"
            >
              Get Started For Free
            </button>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-darkBlue2 text-white">
        <div className="container mx-auto pt-12 px-5 pb-10">
          <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
            {/* email & phone */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center space-x-3 md:-mt-10">
                <div className="w-6">
                  <img
                    className="scale-10"
                    src="/images/icon-phone.svg"
                    alt=""
                  />
                </div>
                <div>1-543-123-4567</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6">
                  <img
                    className="scale-10"
                    src="/images/icon-email.svg"
                    alt=""
                  />
                </div>
                <div>example@fylo.com</div>
              </div>
            </div>
            {/* menus */}
            <div
              className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20
            md:space-y-0 md:flex-row"
            >
              <div className="flex flex-col space-y-3">
                <a href="#">About</a>
                <a href="#">Jobs</a>
                <a href="#">Press</a>
                <a href="#">Blog</a>
              </div>
              <div className="flex flex-col space-y-3">
                <a href="#">Contact Us</a>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
              </div>
            </div>

            {/* social */}
            <div className="flex justify-center pb-10 space-x-3">
              <div>
                <a href="#">
                  <img
                    className="p-2 bg-darkBlue rounded-full ficon"
                    src="/images/facebook.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img
                    className="p-2 bg-darkBlue rounded-full ficon"
                    src="/images/twitter.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img
                    className="p-2 bg-darkBlue rounded-full ficon"
                    src="/images/instagram.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
