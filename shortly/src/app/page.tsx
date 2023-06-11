"use client";

import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState("hidden");
  return (
    <main>
      {/* nav container */}
      <nav className="relative container mx-auto p-6">
        {/* flex container for all items */}
        <div className="flex items-center justify-between">
          {/* flex container for logo/menu */}
          <div className="flex items-center space-x-20">
            {/* logo */}
            <img className="cursor-pointer" src="/images/logo.svg" alt="" />
            {/* left menu */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <a
                className="text-grayishViolet hover:text-veryDarkViolet"
                href="#"
              >
                Features
              </a>
              <a
                className="text-grayishViolet hover:text-veryDarkViolet"
                href="#"
              >
                Princing
              </a>
              <a
                className="text-grayishViolet hover:text-veryDarkViolet"
                href="#"
              >
                Resources
              </a>
            </div>
          </div>

          {/* right buttons menu */}
          <div className="hidden lg:flex items-center space-x-6 font-bold text-grayishViolet">
            <div className="hover:text-veryDarkViolet">
              <a
                className="px-8 py-3 font-bold text-white bg-cyan
             rounded-full hover:opacity-70"
                href="#"
              >
                Sing up
              </a>
            </div>
          </div>
          {/* Hamburger Button */}
          <div className="lg:hidden">
            <button
              onClick={() =>
                menu === "show" ? setMenu("hidden") : setMenu("show")
              }
              className={`z-40 block lg:hidden focus:outline-none hamburger ${
                menu === "show" && "open"
              }`}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          {/* TODO: Mobile menu */}
          {menu === "show" && (
            <div className="absolute p-6 rounded-lg bg-darkViolet right-6 left-6 top-20 z-50">
              <div
                className="flex flex-col items-center justify-items-center
              w-full space-y-6 font-bold text-white rounded-sm"
              >
                <a className="w-full text-center" href="#">
                  Features
                </a>
                <a className="w-full text-center" href="#">
                  Pricing
                </a>
                <a className="w-full text-center" href="#">
                  Pricing
                </a>
                <a className="w-full text-center" href="#">
                  Resources
                </a>
                <a
                  className="w-full text-center pt-6 border-t-2 border-gray-400"
                  href="#"
                >
                  Login
                </a>
                <a
                  className="w-full text-center py-3 rounded-full bg-cyan"
                  href="#"
                >
                  Sing Up
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* hero section */}
      <section>
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* content container */}
          <div
            className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2
            xl:mb-52"
          >
            <h1
              className="text-5xl font-bold text-center lg:text-6xl 
            lg:max-w-md lg:text-left"
            >
              More than just shorter
            </h1>
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Build yout bramd's recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="mx-auto lg:mx-0">
              <a
                className="py-5 px-10 text-2xl font-bold text-white
              bg-cyan rounded-full lg:py-4 hover:opacity-70"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* image */}
          <div className="mb-24 mx-auto md:w-180 lg:w-1/2 lg:mb-0">
            <img src="/images/illustration-working.svg" alt="" />
          </div>
        </div>
      </section>

      {/* shorten section */}
      <section className="relative bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative flex flex-col w-full p-10 -mt-20
          space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0
          md:space-x-3"
          >
            <input
              className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500
            focus:outline-none"
              placeholder="Shorten a link here"
              type="text"
            />

            <button
              className="px-10 py-3 text-white bg-cyan
            rounded-lg hover:bg-cyanLight focus:outline-none
            md:py-2"
            >
              Shorten it!
            </button>
          </form>
          {/* link 1 */}
          <div
            className="flex flex-col items-center justify-between w-full
          p-6 bg-white rounded-lg md:flex-row"
          >
            <p
              className="font-bold text-center text-veryDarkViolet
            md:text-left"
            >
              https://frontentmentor.io
            </p>

            <div
              className="flex flex-col items-center justify-end
            flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
            >
              <div className="font-bold text-cyan">https://re.ink/213j3j3</div>
              <button
                className="p-2 px-8 text-white bg-cyan rounded
              hover:opacity-70 focus:outline-none"
              >
                Copy
              </button>
            </div>
          </div>

          {/* link 2 */}
          <div
            className="flex flex-col items-center justify-between w-full
          p-6 bg-white rounded-lg md:flex-row"
          >
            <p
              className="font-bold text-center text-veryDarkViolet
            md:text-left"
            >
              https://instagram.com/frontentmentor
            </p>

            <div
              className="flex flex-col items-center justify-end
            flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
            >
              <div className="font-bold text-cyan">https://re.ink/9djas</div>
              <button
                className="p-2 px-8 text-white bg-darkViolet rounded
              hover:opacity-70 focus:outline-none"
              >
                Copy
              </button>
            </div>
          </div>

          {/* link 3 */}
          <div
            className="flex flex-col items-center justify-between w-full
          p-6 bg-white rounded-lg md:flex-row"
          >
            <p
              className="font-bold text-center text-veryDarkViolet
            md:text-left"
            >
              https://twitter.com/frontentmentor
            </p>

            <div
              className="flex flex-col items-center justify-end
            flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
            >
              <div className="font-bold text-cyan">https://re.ink/fjs8df</div>
              <button
                className="p-2 px-8 text-white bg-cyan rounded
              hover:opacity-70 focus:outline-none"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* stats section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p
            className="max-w-xs mx-auto text-center text-gray-400
          md:max-2-md"
          >
            Track how your links are performing acress the web with our advances
            statistic dashboard.
          </p>
        </div>
      </section>

      {/* Feature box section */}
      <section className="pb-32 bg-gray-100">
        <div
          className="container relative flex flex-col items-start
        px-6 mx-auto md:flex-row md:space-x-7"
        >
          {/* Horizontal line */}
          <div
            className="hidden absolute top-24 left-16 h-3 bg-cyan
          w-10/12 md:block"
          ></div>
          {/* vertical line */}
          <div className="absolute w-2 h-full left-1/2 -ml-1 bg-cyan md:hidden"></div>

          {/* box 1 */}
          <div
            className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg
          md:w-1/3"
          >
            {/* image positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* image container for background */}
              <div
                className="flex items-center justify-center w-20 h-20
              p-4 rounded-full bg-veryDarkViolet"
              >
                <img src="/images/icon-brand-recognition.svg" alt="" />
              </div>
            </div>
            <h5
              className="pt-6 text-xl font-bold text-center capitalize
            md:text-left"
            >
              Brand recognition
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          {/* box 2 */}
          <div
            className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg
          md:w-1/3 md:mt-8"
          >
            {/* image positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* image container for background */}
              <div
                className="flex items-center justify-center w-20 h-20
              p-4 rounded-full bg-veryDarkViolet"
              >
                <img src="/images/icon-detailed-records.svg" alt="" />
              </div>
            </div>
            <h5
              className="pt-6 text-xl font-bold text-center capitalize
            md:text-left"
            >
              Detailed records
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          {/* box 3 */}
          <div
            className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg
          md:w-1/3 md:mt-16"
          >
            {/* image positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* image container for background */}
              <div
                className="flex items-center justify-center w-20 h-20
              p-4 rounded-full bg-veryDarkViolet"
              >
                <img src="/images/icon-fully-customizable.svg" alt="" />
              </div>
            </div>
            <h5
              className="pt-6 text-xl font-bold text-center capitalize
            md:text-left"
            >
              Fully customizable
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-darkViolet cta">
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
            Boost your links today
          </h5>
          <button
            className="px-10 py-5 mx-auto text-2xl font-bold text-white 
          rounded-full bg-cyan hover:bg-cyanLight md:text-base md:py-3
          focus:outline-none"
          >
            Get started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-veryDarkViolet">
        <div
          className="container flex flex-col items-center justify-between
        mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start"
        >
          {/* logo */}
          <img src="/images/logo.svg" alt="" />

          {/* menus container */}
          <div
            className="flex flex-col space-y-16 md:space-x-20 md:flex-row
            md:space-y-0"
          >
            {/* menu 1 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Features
              </div>
              <div
                className="flex flex-col items-center space-y-3
              md:items-start"
              >
                <a
                  className="capitalize text-grayishViolet
                hover:text-cyan"
                  href="#"
                >
                  Link sortening
                </a>
                <a
                  className="capitalize text-grayishViolet
                hover:text-cyan"
                  href="#"
                >
                  Brand links
                </a>
                <a
                  className="capitalize text-grayishViolet
                hover:text-cyan"
                  href="#"
                >
                  Analytics
                </a>
              </div>
            </div>

            {/* menu 2 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Resources
              </div>
              <div
                className="flex flex-col items-center space-y-3
              md:items-start"
              >
                <a
                  className="capitalize text-grayishViolet
                hover:text-cyan"
                  href="#"
                >
                  Blog
                </a>
                <a
                  className="capitalize text-grayishViolet
                hover:text-cyan"
                  href="#"
                >
                  Developers
                </a>
                <a
                  className="capitalize text-grayishViolet
                hover:text-cyan"
                  href="#"
                >
                  Support
                </a>
              </div>
            </div>

            {/* menu 3 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Company
              </div>
              <div
                className="flex flex-col items-center space-y-3
              md:items-start"
              >
                <a
                  className="capitalize text-grayishViolet
                hover:text-cyan"
                  href="#"
                >
                  About
                </a>
                <a
                  className="capitalize text-grayishViolet
                hover:text-cyan"
                  href="#"
                >
                  Our Team
                </a>
                <a
                  className="capitalize text-grayishViolet
                hover:text-cyan"
                  href="#"
                >
                  Careers
                </a>
                <a
                  className="capitalize text-grayishViolet
                hover:text-cyan"
                  href="#"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* social container */}
          <div className="flex space-x-6">
            <a href="#">
              <img className="ficon" src="/images/icon-facebook.svg" alt="" />
            </a>
            <a href="#">
              <img className="ficon" src="/images/icon-twitter.svg" alt="" />
            </a>
            <a href="#">
              <img className="ficon" src="/images/icon-pinterest.svg" alt="" />
            </a>
            <a href="#">
              <img className="ficon" src="/images/icon-instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
