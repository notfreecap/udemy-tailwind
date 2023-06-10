const Columns = () => {
  return (
    <div>
      {/* Columns */}

      <div className="columns-4 gap-1">
        <img className="w-full" src="/images/img1.jpg" alt="" />
        <img className="w-full" src="/images/img2.jpg" alt="" />
        <img className="w-full" src="/images/img2.jpg" alt="" />
        <img className="w-full" src="/images/img1.jpg" alt="" />
      </div>

      <div className="columns-xs gap-1">
        <img className="w-full" src="/images/img1.jpg" alt="" />
        <img className="w-full" src="/images/img2.jpg" alt="" />
        <img className="w-full" src="/images/img2.jpg" alt="" />
        <img className="w-full" src="/images/img1.jpg" alt="" />
      </div>

      <div className="columns-4 gap-1">
        <img className="w-full aspect-video" src="/images/img1.jpg" alt="" />
        <img className="w-full aspect-square" src="/images/img2.jpg" alt="" />
        <img className="w-full" src="/images/img2.jpg" alt="" />
        <img className="w-full" src="/images/img1.jpg" alt="" />
      </div>
    </div>
  );
};

export default Columns;
