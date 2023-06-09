const Sizing = () => {
  return (
    <div>
      {/* Width */}
      <div className="bg-slate-400 text-white w-12">Hello</div>
      <div className="bg-slate-400 text-white w-48">Hello</div>
      <div className="bg-slate-400 text-white w-76">Hello</div>

      {/* Percentages */}
      <div className="bg-yellow-500 text-white w-1/4">Hello</div>
      <div className="bg-yellow-500 text-white w-1/3">Hello</div>
      <div className="bg-yellow-500 text-white w-1/2">Hello</div>

      {/* Width of the viewport */}
      <div className="bg-blue-500 text-white w-screen">Hello</div>

      {/* 100% of container */}
      <div className="bg-blue-300 text-white w-full">Hello</div>

      {/* Arbitrary width */}
      <div className="bg-blue-600 text-white w-[200px]">Hello</div>

      {/* Max width */}
      <div className="bg-slate-600 max-w-sm text-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit
        blanditiis nemo officia quidem ullam, vero, id pariatur, dicta ab
        perspiciatis. Et molestiae ea architecto dolorum voluptatem officia
        perspiciatis ducimus!
      </div>

      {/* Height */}
      <div className="flex items-end">
        <div className="bg-orange-500 w-20 h-24 border-r text-center">
          Hello 1
        </div>
        <div className="bg-orange-500 w-20 h-32 border-r text-center">
          Hello 2
        </div>
        <div className="bg-orange-500 w-20 h-40 border-r text-center">
          Hello 3
        </div>
        <div className="bg-orange-500 w-20 h-48 border-r text-center">
          Hello 4
        </div>
        <div className="bg-orange-500 w-20 h-64 border-r text-center">
          Hello 5
        </div>
        <div className="bg-orange-500 w-20 h-96 text-center">Hello 6</div>
      </div>

      {/* Full screen height */}
      <div className="bg-blue-300 h-screen"></div>
      <div className="bg-emerald-700 h-screen"></div>
    </div>
  );
};

export default Sizing;
