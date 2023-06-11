"use client";

import CreationsImage, { imageProps } from "@/components/creations-image";
import { useState } from "react";

const imagesProps: imageProps[] = [
  { imageName: "image-deep-earth.jpg", text: "deep earth" },
  { imageName: "image-night-arcade.jpg", text: "night arcade" },
  { imageName: "image-soccer-team.jpg", text: "soccer tear vr" },
  { imageName: "image-grid.jpg", text: "grid" },
];

const imagesPropsII: imageProps[] = [
  { imageName: "image-from-above.jpg", text: "from above vr" },
  { imageName: "image-pocket-borealis.jpg", text: "pocket borealis" },
  { imageName: "image-curiosity.jpg", text: "curiosity" },
  { imageName: "image-fisheye.jpg", text: "fisheye" },
];

export default function Home() {
  const [menu, setMenu] = useState("hidden");

  return (
    <main>
      {/* Hero sectopn */}
      <section className="hero">
        <div className="container max-w-6xl mx-auto px-6 py-12">
          {/* nav */}
          <nav className="flex flex-row items-center justify-between font-bold text-white">
            {/* logo */}
            <img src="/images/logo.svg" alt="" />

            {/* menu */}
            <div className="hidden h-10 font-sans md:flex md:space-x-8">
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            {/* Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() =>
                  menu === "show" ? setMenu("hidden") : setMenu("show")
                }
                className={`z-40 block md:hidden focus:outline-none hamburger ${
                  menu === "show" && "open"
                }`}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>
          {/* Mobile menu */}
          {menu === "show" && (
            <div
              className="absolute top-0 bottom-0 flex left-0 flex-col self-end
           md:hidden w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg 
          text-white uppercase bg-black"
            >
              <a className="hover:text-pink-500" href="#">
                About
              </a>
              <a className="hover:text-pink-500" href="#">
                Careers
              </a>
              <a className="hover:text-pink-500" href="#">
                Events
              </a>
              <a className="hover:text-pink-500" href="#">
                Products
              </a>
              <a className="hover:text-pink-500" href="#">
                Support
              </a>
            </div>
          )}

          <div
            className="max-w-xl mt-32 mb-32 p-4 font-sans text-4xl text-white
            uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl"
          >
            Impressive Experiences That deliver
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section>
        <div
          className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6
        text-gray-900 md:flex-row md:px-0"
        >
          {/* image */}
          <img src="/images/desktop/image-interactive.jpg" alt="" />

          {/* text container */}
          <div
            className="top-48 pr-0 bg-white md:absolute md:right-0
          md:py-20 md:pl-20"
          >
            <h2
              className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center
            text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left"
            >
              The leader in interactive vr
            </h2>
            <p className="max-w-md text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      {/* Creations section */}
      <section>
        <div
          className="container max-w-6xl mx-auto my-32 px-6 text-gray-900
        md:px-0"
        >
          {/* Creations header */}
          <div className="flex justify-center mb-20 md:justify-between">
            <h2
              className="text-4xl text-center uppercase md:text-left
            md:text-5xl"
            >
              Our creations
            </h2>

            <button
              className="hidden px-10 py-2 my-0 font-bold
            tracking-widest uppercase border-2 order-black font-alata
            hover:bg-black hover:text-white md:block"
            >
              See all
            </button>
          </div>
          {/* items container */}
          <div
            className="flex flex-col justify-between w-full space-y-6
            text-2xl text-white uppercase md:flex-row md:space-y-0
            md:space-x-8"
          >
            <CreationsImage elementList={imagesProps} />
          </div>
          <div
            className="flex flex-col justify-between w-full space-y-6
            text-2xl text-white uppercase md:flex-row md:space-y-0
            md:space-x-8 mt-6"
          >
            <CreationsImage elementList={imagesPropsII} />
          </div>
          <div className="flex justify-center mt-6 md:hidden">
            <button
              className="px-10 py-2 my-0 font-bold
            tracking-widest uppercase border-2 order-black font-alata
            hover:bg-black hover:text-white md:block"
            >
              See all
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black">
        <div className="container max-w-6xl py-10 mx-auto text-white">
          <div
            className="flex flex-col items-center mb-8 space-y-6
          md:flex-row md:space-y-0 md:justify-between md:items-start"
          >
            {/* Menu & logo container */}
            <div
              className="flex flex-col items-center space-y-8 md:items-start
            md:space-y-4"
            >
              {/* logo */}
              <div className="h-8">
                <img className="w-44 md:ml-3" src="/images/logo.svg" alt="" />
              </div>
              {/* menu container */}
              <div
                className="flex flex-col items-center space-y-4 font-bold
                md:flex-row md:space-y-0 md:space-x-6 md:ml-3"
              >
                {/* item 1 */}
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* item 2 */}
                <div className="h-10 group">
                  <a href="#">Creers</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* item 3 */}
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* item 4 */}
                <div className="h-10 group">
                  <a href="#">Products</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* item 5 */}
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>
            {/* Social & copy container */}
            <div
              className="flex flex-col items-start justify-between
            space-y-4 text-gray-500"
            >
              {/* icons container */}
              <div
                className="flex items-center mx-auto justify-center space-x-4
              md:justify-end md:mx-0"
              >
                {/* icon 1 */}
                <div className="h-8 group">
                  <a href="#">
                    <img src="/images/icon-facebook.svg" alt="" />
                  </a>
                </div>
                {/* icon 2 */}
                <div className="h-8 group">
                  <a href="#">
                    <img src="/images/icon-twitter.svg" alt="" />
                  </a>
                </div>
                {/* icon 3 */}
                <div className="h-8 group">
                  <a href="#">
                    <img src="/images/icon-pinterest.svg" alt="" />
                  </a>
                </div>
                {/* icon 4 */}
                <div className="h-8 group">
                  <a href="#">
                    <img src="/images/icon-instagram.svg" alt="" />
                  </a>
                </div>
              </div>
              {/* copy */}
              <div className="font-bold">
                &copy; 2023 Loopstudios. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
