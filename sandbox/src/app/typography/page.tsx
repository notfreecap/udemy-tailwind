const Typography = () => {
  return (
    <div className="mb-10">
      {/* Font family */}
      <div className="font-sans">Tailwind is awesome</div>
      <div className="font-serif">Tailwind is awesome</div>
      <div className="font-mono">Tailwind is awesome</div>

      {/* Font size */}
      <div className="text-xs">Tailwind is awesome</div>
      <div className="text-sm">Tailwind is awesome</div>
      <div className="text-base">Tailwind is awesome</div>
      <div className="text-lg">Tailwind is awesome</div>
      <div className="text-xl">Tailwind is awesome</div>
      <div className="text-2xl">Tailwind is awesome</div>
      <div className="text-9xl underline decoration-wavy text-center">
        Tailwind is awesome
      </div>

      {/* Font weight */}
      <div className="font-light">Tailwind is awesome</div>
      <div className="font-normal">Tailwind is awesome</div>
      <div className="font-medium">Tailwind is awesome</div>
      <div className="font-semibold">Tailwind is awesome</div>
      <div className="font-bold">Tailwind is awesome</div>

      {/* Letter spacing */}
      <div className="tracking-tight">Tailwind is awesome</div>
      <div className="tracking-normal">Tailwind is awesome</div>
      <div className="tracking-wide">Tailwind is awesome</div>

      {/* Aligment */}
      <div className="text-left">Tailwind is awesome</div>
      <div className="text-right">Tailwind is awesome</div>
      <div className="text-center">Tailwind is awesome</div>

      {/* Text decoration */}
      <div className="underline decoration-4 decoration-yellow-400">
        Tailwind is awesome
      </div>
      <div className="underline decoration-double decoration-yellow-400">
        Tailwind is awesome
      </div>
      <div className="underline decoration-dotted decoration-yellow-400">
        Tailwind is awesome
      </div>
      <div className="underline decoration-dashed decoration-yellow-400">
        Tailwind is awesome
      </div>
      <div className="underline decoration-wavy decoration-yellow-400">
        Tailwind is awesome
      </div>

      {/* Decoration offset */}
      <div className="underline decoration-4 decoration-yellow-400 underline-offset-8">
        Tailwind is awesome
      </div>

      {/* Text transform */}
      <div className="divide-y divide-white">
        <p className="normal-case">Tailwind is awesome</p>
        <p className="uppercase">Tailwind is awesome</p>
        <p className="lowercase">Tailwind is awesome</p>
        <p className="capitalize">Tailwind is awesome</p>
      </div>
    </div>
  );
};

export default Typography;
