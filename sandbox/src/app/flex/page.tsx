const Flexbox = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="p-10 border border-blue-300 bg-blue-600">01</div>
        <div className="p-10 border border-blue-300 bg-blue-600">02</div>
        <div className="p-10 border border-blue-300 bg-blue-600">03</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
      </div>
      <br />
      <div className="flex items-center justify-around flex-wrap h-72 w-full bg-gray-300">
        <div className="p-10 border border-blue-300 bg-blue-600">01</div>
        <div className="p-10 border border-blue-300 bg-blue-600">02</div>
        <div className="p-10 border border-blue-300 bg-blue-600">03</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
      </div>{" "}
      <br />
      <br />
      <div className="flex gap-5 flex-col items-center h-72 w-full bg-gray-300">
        <div className="p-10 border border-blue-300 bg-blue-600">01</div>
        <div className="p-10 border border-blue-300 bg-blue-600">02</div>
        <div className="p-10 border border-blue-300 bg-blue-600">03</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
      </div>
      <br />
      <br />
      <div className="flex w-full bg-gray-300">
        <div className="p-10 border border-blue-300 bg-blue-600">01</div>
        <div className="p-10 border border-blue-300 bg-blue-600">02</div>
        <div className="p-10 border border-blue-300 bg-blue-600">03</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
        <div className="p-10 border border-blue-300 bg-blue-600">04</div>
      </div>
    </div>
  );
};

export default Flexbox;
