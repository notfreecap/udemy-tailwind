const ContainerSpacing = () => {
  return (
    <div>
      {/* Container */}
      <div className="container mx-auto">
        <article>
          <h3>Article one</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            minus quo, nihil officia corrupti ut repudiandae blanditiis ullam
            sapiente magnam quae vero. Quidem deleniti minima obcaecati eos,
            placeat totam dicta.
          </p>
        </article>
      </div>

      {/* Margin */}
      <div className="bg-slate-400 m-2">Hello world</div>
      <div className="bg-slate-400 ml-8">Hello world</div>
      <div className="bg-slate-400 mt-[20px]">Hello world</div>

      {/* Padding */}
      <div className="bg-slate-400 p-2">Hello world</div>
      <div className="bg-slate-400 pl-8">Hello world</div>
      <div className="bg-slate-400 pt-[20px] mb-10">Hello world</div>

      {/* Space between X */}
      <div className="flex space-x-5">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </div>

      {/* Space between X */}
      <div className="flex flex-col space-y-5 bg-slate-400 mt-10">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
      </div>
    </div>
  );
};

export default ContainerSpacing;
