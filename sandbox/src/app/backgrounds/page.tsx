const Backgrounds = () => {
  return (
    <div className="mb-20">
      {/* Background image */}
      <div
        className="h-64 w-80 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/img1.jpg')" }}
      ></div>

      {/* Gradients */}
      <div className="h-24 bg-gradient-to-br from-cyan-500 to to-blue-500"></div>

      {/* Shadows */}
      <div className="w-96 mt-6 ml-4 p-4 shadow shadow-lime-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        maiores aperiam. Architecto aliquid quo officia provident ipsum facilis
        rerum nesciunt odio odit incidunt libero, debitis laborum magni rem
        quibusdam recusandae.
      </div>

      <div className="w-96 mt-6 ml-4 p-4 shadow-md shadow-lime-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        maiores aperiam. Architecto aliquid quo officia provident ipsum facilis
        rerum nesciunt odio odit incidunt libero, debitis laborum magni rem
        quibusdam recusandae.
      </div>

      <div className="w-96 mt-6 ml-4 p-4 shadow-lg shadow-lime-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        maiores aperiam. Architecto aliquid quo officia provident ipsum facilis
        rerum nesciunt odio odit incidunt libero, debitis laborum magni rem
        quibusdam recusandae.
      </div>

      <div className="w-96 mt-6 ml-4 p-4 shadow-xl shadow-lime-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        maiores aperiam. Architecto aliquid quo officia provident ipsum facilis
        rerum nesciunt odio odit incidunt libero, debitis laborum magni rem
        quibusdam recusandae.
      </div>

      <div className="w-96 mt-6 ml-4 p-4 shadow-inner shadow-lime-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        maiores aperiam. Architecto aliquid quo officia provident ipsum facilis
        rerum nesciunt odio odit incidunt libero, debitis laborum magni rem
        quibusdam recusandae.
      </div>

      <div className="w-96 mt-6 ml-4 p-4 shadow-2xl shadow-lime-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        maiores aperiam. Architecto aliquid quo officia provident ipsum facilis
        rerum nesciunt odio odit incidunt libero, debitis laborum magni rem
        quibusdam recusandae.
      </div>

      {/* Mix blend */}
      <div className="flex justify-center -space-x-24 mt-20 bg-white">
        <div className="mix-blend-multiply bg-blue-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          dicta reprehenderit animi ipsum delectus iusto quidem aliquid quod
          explicabo alias, ullam id quasi sit. Rem animi dolorum veritatis
          fugiat quia!
        </div>
        <div className="mix-blend-multiply bg-pink-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          dicta reprehenderit animi ipsum delectus iusto quidem aliquid quod
          explicabo alias, ullam id quasi sit. Rem animi dolorum veritatis
          fugiat quia!
        </div>
      </div>
    </div>
  );
};

export default Backgrounds;
