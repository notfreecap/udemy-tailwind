const Filters = () => {
  return (
    <div>
      {/* Blur */}
      <div className="blur">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam
        eveniet velit quis consequatur laborum, harum doloribus quam quas
        laboriosam aliquid rem veritatis nisi neque temporibus, distinctio, at
        hic sed.
      </div>

      <div className="blur-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam
        eveniet velit quis consequatur laborum, harum doloribus quam quas
        laboriosam aliquid rem veritatis nisi neque temporibus, distinctio, at
        hic sed.
      </div>

      <img src="/images/img1.jpg" alt="sss" className="blur-xl w-100 h-80" />

      {/* Brightness */}

      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 brightness-50"
      />
      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 brightness-75"
      />
      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 brightness-100"
      />
      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 brightness-150"
      />
      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 brightness-200"
      />

      {/* Contrast */}
      <img src="/images/img1.jpg" alt="sss" className="w-100 h-80 contrast-0" />

      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 contrast-100"
      />

      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 contrast-150"
      />

      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 contrast-200"
      />

      {/* Grayscale */}
      <img src="/images/img1.jpg" alt="sss" className="w-100 h-80 grayscale" />

      {/* Invert */}
      <img src="/images/img1.jpg" alt="sss" className="w-100 h-80 invert" />

      {/* Sepia */}
      <img src="/images/img1.jpg" alt="sss" className="w-100 h-80 sepia" />

      {/* Hue Rotate */}
      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 hue-rotate-15"
      />
      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 hue-rotate-60"
      />
      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 hue-rotate-90"
      />
      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 hue-rotate-180"
      />
      <img
        src="/images/img1.jpg"
        alt="sss"
        className="w-100 h-80 -hue-rotate-60"
      />
    </div>
  );
};

export default Filters;
