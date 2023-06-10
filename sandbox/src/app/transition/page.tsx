const Transition = () => {
  return (
    <div className="m-10 mr-40 flex flex-col max-w-sm gap-2">
      <button className="bg-blue-500 px-5 py-3 rounded-lg hover:bg-blue-700">
        Click me
      </button>

      <button className="bg-blue-500 px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-1000">
        Click me
      </button>

      <button className="bg-blue-500 px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-1000 hover:rotate-12">
        Click me
      </button>

      <img
        className="hover:rotate-12 hover:skew-x-6 hover:scale-110 transition duration-500 rounded-md cursor-pointer"
        src="/images/img2.jpg"
        alt=""
      />
    </div>
  );
};

export default Transition;
