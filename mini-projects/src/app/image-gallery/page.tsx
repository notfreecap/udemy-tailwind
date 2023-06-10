const ImageGallery = () => {
  return (
    <main className="flex items-center justify-center bg-cyan-50 min-h-screen py-3 px-8">
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        {/* menu */}
        <div
          className="flex flex-col items-center justify-center
         space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end"
        >
          <div className="group">
            <a>Vector</a>
            <div
              className="mx-2 mt-2 duration-500 border-b-2 
            opacity-0 border-black group-hover:opacity-100"
            ></div>
          </div>
          <div className="group">
            <a>Illustations</a>
            <div
              className="mx-2 mt-2 duration-500 border-b-2 
            opacity-0 border-black group-hover:opacity-100"
            ></div>
          </div>
          <div className="group">
            <a>Images</a>
            <div
              className="mx-2 mt-2 duration-500 border-b-2 
            opacity-0 border-black group-hover:opacity-100"
            ></div>
          </div>
          <div className="group">
            <a>Icons</a>
            <div
              className="mx-2 mt-2 duration-500 border-b-2 
            opacity-0 border-black group-hover:opacity-100"
            ></div>
          </div>
        </div>
        {/* search container */}
        <div
          className="flex flex-col justify-between space-y-5
        md:flex-row md:space-y-0"
        >
          <div className="flex justify-between border-b">
            <input
              className="ml-6 border-none md:w-80 placeholder:font-thin
              focus:outline-none"
              placeholder="Search"
              type="text"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="gray"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <button
            className="text-white bg-black py-3 px-14 
            font-normal rounded-md shadow-2xl border border-black hover:bg-white
            hover:text-black duration-200"
          >
            Upload
          </button>
        </div>

        {/* Gallery container */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Image 1 */}
          <div className="relative group">
            <img className="w-full" src="/images/img1.jpg" alt="" />
            <div
              className="absolute bottom-0 right-0 left-0 p-2 px-4 text-white
                duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
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
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Image 2 */}
          <div className="relative group">
            <img className="w-full" src="/images/img2.jpg" alt="" />
            <div
              className="absolute bottom-0 right-0 left-0 p-2 px-4 text-white
                duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
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
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Image 3 */}
          <div className="relative group">
            <img className="w-full" src="/images/img3.jpg" alt="" />
            <div
              className="absolute bottom-0 right-0 left-0 p-2 px-4 text-white
                duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
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
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Image 4 */}
          <div className="relative group">
            <img className="w-full" src="/images/img4.jpg" alt="" />
            <div
              className="absolute bottom-0 right-0 left-0 p-2 px-4 text-white
                duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
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
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Image 5 */}
          <div className="relative group">
            <img className="w-full" src="/images/img5.jpg" alt="" />
            <div
              className="absolute bottom-0 right-0 left-0 p-2 px-4 text-white
                duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
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
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Image 6 */}
          <div className="relative group">
            <img className="w-full" src="/images/img6.jpg" alt="" />
            <div
              className="absolute bottom-0 right-0 left-0 p-2 px-4 text-white
                duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
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
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImageGallery;
