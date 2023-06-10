const ProductModal = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-100">
      <div
        className="flex flex-col m-8 p-8 space-y-3 md:flex-row 
        md:space-y-0 md:space-x-12 bg-white rounded-3xl shadow-2xl
      "
      >
        {/* image */}
        <div className="flex justify-center">
          <img
            className="hover:scale-105 duration-150 w-60 h-44"
            src="/images/product1.webp"
            alt="Product image"
          />
        </div>
        {/* product detail */}
        <div className="flex flex-col text-center md:text-left">
          <div className="space-y-4 mb-10 px-2">
            <h3
              className="bg-black text-white rounded-xl py-1 w-32
             text-center inline-block"
            >
              Free shipping
            </h3>
            <h2 className="text-xl font-medium">
              Logitech G with G560 lightsync pc gaming speakers
            </h2>
          </div>
          {/* price */}
          <div className="space-y-3 px-2">
            <p className="text-sm line-through">$799</p>
            <p className="text-4xl font-bold">$599</p>
            <p className="text-sm font-light text-gray-400">
              This offer is valid until April 3 or as long as stock lasts!
            </p>
          </div>
          <div className="my-4">
            <button
              className="p-4 rounded-lg text-white shadow-lg shadow-blue-800 
            bg-blue-600 w-full hover:bg-blue-800 duration-200"
            >
              Add to cart
            </button>
          </div>
          <div className="flex flex-row items-center space-x-2 group">
            <div
              className="w-3 h-3 bg-green-400 rounded-full 
            group-hover:animate-ping"
            ></div>

            <span className="text-sm">50+ pcs. in stock.</span>
          </div>
          {/* Buttons */}
          <div
            className="flex flex-col mt-5 space-y-2 md:flex-row
            md:space-y-0 md:space-x-4"
          >
            <div
              className="flex justify-center border-2 
              border-gray-300 rounded-lg w-full p-3 text-md space-x-3
              shadow-sm hover:bg-opacity-30 hover:shadow-lg 
              hover:-transalte-y-0.5 transition duration-200 cursor-pointer"
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span>Add to cart</span>
            </div>
            <div
              className="flex justify-center border-2 
            border-gray-300 rounded-lg w-full p-3 text-md space-x-3
            shadow-sm hover:bg-opacity-30 hover:shadow-lg 
            hover:-transalte-y-0.5 transition duration-200 cursor-pointer"
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span>Add to wishlist</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductModal;
