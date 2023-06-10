const Login = () => {
  return (
    <main className="flex items-center justify-center bg-red-100 min-h-screen">
      <div
        className="flex flex-col bg-white rounded-2xl m-6 shadow-2xl relative
        md:flex-row"
      >
        <div className="flex flex-col space-y-9 p-10">
          <div className="flex flex-col space-y-8">
            <h1 className="text-4xl font-bold font-serif">Log in</h1>
            <p className="text-sm font-light text-gray-600">
              Log in to your account to upload or download pictures, videos or
              music.
            </p>
          </div>
          <div className="flex flex-col space-y-10">
            <div className="flex w-full">
              <input
                className="border py-4 px-3 w-full rounded-lg
                placeholder:font-light"
                placeholder="Enter your email address"
                type="text"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <a className="text-cyan-700 font-light text-md" href="#">
                Forgot password?
              </a>
              <button
                className="flex flex-row w-full md:w-auto justify-center 
                items-center bg-cyan-700 py-5 px-12 rounded-md shadow-sm
                text-white shadow-cyan-100 hover:opacity-90 hover:shadow-lg
                transition hover:-translate-y-0.5 duration-150"
              >
                Next{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col border-t-2 border-t-gray-300 text-center">
            <div className="m-6">
              <span className="text-gray-400 text-sm">Or log in with</span>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly space-y-3 md:space-y-0">
              <div
                className="flex flex-row border px-6 py-2 items-center
               justify-center rounded-lg font-light hover:bg-opacity-30
               shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition duration-150"
              >
                <img
                  className="h-8 w-8 mr-3"
                  src="/images/facebook.png"
                  alt=""
                />
                Facebook
              </div>
              <div
                className="flex flex-row border px-6 py-2 items-center
               justify-center rounded-lg font-light hover:bg-opacity-30
               shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition duration-150"
              >
                <img className="h-8 w-8 mr-3" src="/images/google.png" alt="" />
                Google
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-[430px] h-full rounded-r-2xl hidden md:block"
            src="/images/water.jpg"
            alt=""
          />
        </div>

        {/* close button */}
        <div
          className="flex items-center justify-center group absolute top-4 right-4 rounded-full 
          bg-gray-200 md:bg-white p-1 cursor-pointer 
          hover:-translate-y-0.5 hover:shadow-lg transition duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black group-hover:text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </main>
  );
};

export default Login;
