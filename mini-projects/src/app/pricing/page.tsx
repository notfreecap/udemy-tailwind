const Pricing = () => {
  return (
    // Global container
    <main className="flex items-center justify-center text-white bg-slate-800 min-h-screen">
      {/* Inner container */}
      <div className="flex flex-col my-6 space-y-6 md:my-0 md:space-y-0 md:space-x-8 md:flex-row">
        {/* Col 1 */}
        <div className="bg-slate-700 rounded-xl text-center">
          <div className="p-8 m-3 bg-slate-800 rounded-xl flex flex-col">
            {/* Upper container */}
            <div className="flex items-center justify-center">
              <h2 className="uppercase font-semibold text-sm">Basic</h2>
            </div>
            {/* Middle container */}
            <div className="flex flex-col">
              <h2 className="mt-10 text-5xl font-serif">
                100<span className="text-6xl">GB</span>
              </h2>
              <h3 className="mt-2">$1.99/month</h3>
              <button
                className="my-4 border border-violet-600 
                rounded-lg py-3 hover:bg-violet-800 hover:border-violet-800 duration-200"
              >
                Purchase
              </button>
            </div>
            {/* Bottom container */}
            <hr />
            <div className="flex flex-col justify-center text-sm space-y-2">
              {/* List item 1 */}
              <div className="flex justify-center mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="ml-1">100 GB storage</span>
              </div>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="ml-1">Option to add members</span>
              </div>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="ml-1">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
        {/* Col 2 */}
        <div className="bg-violet-700 rounded-xl text-center">
          <div className="p-8 m-3 bg-slate-800 rounded-xl flex flex-col">
            {/* Upper container */}
            <div className="flex items-center justify-center">
              <h2 className="uppercase font-semibold text-sm">Basic</h2>
            </div>
            {/* Middle container */}
            <div className="flex flex-col">
              <h2 className="mt-10 text-5xl font-serif">
                200<span className="text-6xl">GB</span>
              </h2>
              <h3 className="mt-2">$3.99/month</h3>
              <button
                className="my-4 border bg-violet-700 border-violet-600 
                rounded-lg py-3 hover:bg-violet-800 hover:border-violet-800 duration-200"
              >
                Purchase
              </button>
            </div>
            {/* Bottom container */}
            <hr />
            <div className="flex flex-col justify-center text-sm space-y-2">
              {/* List item 1 */}
              <div className="flex justify-center mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="ml-1">200 GB storage</span>
              </div>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="ml-1">Option to add members</span>
              </div>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="ml-1">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
        {/* Col 3 */}
        <div className="bg-slate-700 rounded-xl text-center">
          <div className="p-8 m-3 bg-slate-800 rounded-xl flex flex-col">
            {/* Upper container */}
            <div className="flex items-center justify-center">
              <h2 className="uppercase font-semibold text-sm">Basic</h2>
            </div>
            {/* Middle container */}
            <div className="flex flex-col">
              <h2 className="mt-10 text-5xl font-serif">
                2<span className="text-6xl">TB</span>
              </h2>
              <h3 className="mt-2">$8.99/month</h3>
              <button
                className="my-4 border border-violet-600 
                rounded-lg py-3 hover:bg-violet-800 hover:border-violet-800 duration-200"
              >
                Purchase
              </button>
            </div>
            {/* Bottom container */}
            <hr />
            <div className="flex flex-col justify-center text-sm space-y-2">
              {/* List item 1 */}
              <div className="flex justify-center mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="ml-1">2 TB storage</span>
              </div>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="ml-1">Option to add members</span>
              </div>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="ml-1">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
