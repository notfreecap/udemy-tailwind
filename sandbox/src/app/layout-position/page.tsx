import Image from "next/image";

const LayoutPosition = () => {
  return (
    <div>
      {/* Positioning */}
      <div className="relative w-1/2 h-12 bg-red-200">
        <p>Parent element</p>
        <div className="absolute bottom-0 right-0 bg-red-500">
          <p>Abosulte child</p>
        </div>
      </div>

      {/* Top left corner */}
      <div className="relative w-32 h-32 bg-yellow-300 mt-5">
        <div className="absolute w-16 h-16 left-0 top-0 bg-yellow-600"></div>
      </div>

      {/* Top right corner */}
      <div className="relative w-32 h-32 bg-yellow-300 mt-5">
        <div className="absolute w-16 h-16 right-0 top-0 bg-yellow-600"></div>
      </div>

      {/* Bottom left corner */}
      <div className="relative w-32 h-32 bg-yellow-300 mt-5">
        <div className="absolute w-16 h-16 left-0 bottom-0 bg-yellow-600"></div>
      </div>

      {/* Bottom right corner */}
      <div className="relative w-32 h-32 bg-yellow-300 mt-5">
        <div className="absolute w-16 h-16 bottom-0 right-0 bg-yellow-600"></div>
      </div>

      {/* Span top edge */}
      <div className="relative w-32 h-32 bg-yellow-300 mt-5">
        <div className="absolute h-16 inset-x-0 top-0 bg-yellow-600"></div>
      </div>

      {/* Span left edge */}
      <div className="relative w-32 h-32 bg-yellow-300 mt-5">
        <div className="absolute w-16 inset-y-0 left-0 bg-yellow-600"></div>
      </div>

      {/* Span right edge */}
      <div className="relative w-32 h-32 bg-yellow-300 mt-5">
        <div className="absolute w-16 inset-y-0 right-0 bg-yellow-600"></div>
      </div>

      {/* Span bottom edge */}
      <div className="relative w-32 h-32 bg-yellow-300 mt-5">
        <div className="absolute h-16 inset-x-0 bottom-0 bg-yellow-600"></div>
      </div>

      {/* Display classes */}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        sapiente itaque nobis optio{" "}
        <span className="inline font-bold">This is inline</span> alias id
        molestias facilis fugit{" "}
        <span className="inline-block font-bold">This is inline block</span>{" "}
        minus quod laborum est saepe, expedita deserunt unde nesciunt aut
        provident illum. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quasi odio magnam maiores,{" "}
        <span className="block font-bold">This is block</span> laborum
        asperiores, optio molestiae quos eum ullam quo consectetur{" "}
        <span className="hidden font-bold">This is hidden</span> veniam
        veritatis tempore, eveniet molestias? Excepturi voluptatibus architecto
        omnis!
      </div>

      {/* Z-Index */}
      <div className="relative h-36">
        <div className="absolute left-10 w-24 h-24 bg-blue-300 z-30">1</div>
        <div className="absolute left-20 w-24 h-24 bg-blue-400">2</div>
        <div className="absolute left-40 w-24 h-24 bg-blue-500 z-40">3</div>
        <div className="absolute left-60 w-24 h-24 bg-blue-600">4</div>
        <div className="absolute left-80 w-24 h-24 bg-blue-700 z-50">5</div>
      </div>

      {/* Floats */}
      <div className="w-1/2">
        <Image
          className="h-48 w-60 float-left m-4"
          src="/images/img1.jpg"
          alt=""
          width={100}
          height={1000}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a,
          animi optio sed pariatur ab nisi amet fuga necessitatibus eius quia ea
          inventore ut eaque maiores esse, exercitationem aspernatur possimus.
        </p>
      </div>
    </div>
  );
};

export default LayoutPosition;
