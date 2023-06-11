export type imageProps = {
  imageName: string;
  text: string;
};

type props = {
  elementList: imageProps[];
};

const CreationsImage = (props: props) => {
  const { elementList } = props;

  return elementList.map((element) => {
    return (
      <div className="group relative overflow-hidden md:w-1/4">
        {/* desktop image */}
        <img
          className="hidden w-full duration-200 md:block group-hover:scale-110"
          src={`/images/desktop/${element.imageName}`}
          alt=""
        />
        {/* mobile image */}
        <img
          className="w-full md:hidden"
          src={`/images/mobile/${element.imageName}`}
          alt=""
        />
        {/* item gradient */}
        <div
          className="absolute top-0 bottom-0 right-0 left-0
        bg-gradient-to-b from-transparent to-gray-900
        group-hover:from-gray-50 group-hover:to-white
        group-hover:opacity-70"
        ></div>
        {/* item text */}
        <h5
          className="absolute px-6 duration-200 w-52 bottom-4
        md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black"
        >
          {element.text}
        </h5>
      </div>
    );
  });
};

export default CreationsImage;
