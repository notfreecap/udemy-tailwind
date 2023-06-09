const Colors = () => {
  return (
    <div className="bg-white p-10 text-black">
      <h1 className="font-medium">Colors</h1>

      {/* text colors */}
      <p className="text-white bg-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="text-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="text-green-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="text-emerald-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="text-zinc-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* Background colors */}
      <p className="bg-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="bg-slate-800 text-yellow-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="bg-indigo-800 text-yellow-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* underline */}
      <p className="underline decoration-red-500 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="underline decoration-emerald-600 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="underline decoration-yellow-800 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* Borders */}
      <input className="border border-orange-500" />
      <input className="border border-green-500" />
      <input className="border border-blue-500" />

      {/* Divide colors */}
      <div className="divide-y divide-blue-500">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </div>

      {/* Outline */}
      <button className="outline outline-red-700 mr-3">Hello!</button>
      <button className="outline outline-emerald-700 mr-3">Hello!</button>
      <button className="outline outline-green-700 mr-3">Hello!</button>

      {/* Shadows */}
      <button className="shadow-lg bg-slate-400 shadow-yellow-900/30">
        Subscribe
      </button>

      {/* Accent colors */}
      <input className="accent-purple-600" type="checkbox" checked />
      <input className="accent-amber-500-600" type="checkbox" checked />
      <input className="accent-green-800-600" type="checkbox" checked />

      {/* Arbitrary colors */}
      <div className="bg-[#427fab]">AAAAAAAAAAa</div>
      <div className="bg-[#d113c7]">AAAAAAAAAAa</div>
    </div>
  );
};

export default Colors;
