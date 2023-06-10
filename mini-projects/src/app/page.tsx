export default function Home() {
  return (
    <main className="bg-black text-white font-light flex items-center justify-center h-screen">
      <div className="flex flex-col">
        <h1 className="text-white uppercase font-thin text-3xl">
          Some mini projects
        </h1>
        <div className="flex flex-col m-5 space-y-3">
          <a
            href="/login"
            className="flex flex-row items-center space-x-3 cursor-pointer
          hover:border-b-2 border-gray-300 animation duration-150"
          >
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <p>Login</p>
          </a>
          <a
            href="/image-gallery"
            className="flex flex-row items-center space-x-3 cursor-pointer
          hover:border-b-2 border-gray-300 animation duration-150"
          >
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <p>Image Gallery</p>
          </a>
          <a
            href="/product-modal"
            className="flex flex-row items-center space-x-3 cursor-pointer
          hover:border-b-2 border-gray-300 animation duration-150"
          >
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <p>Product Modal</p>
          </a>
          <a
            href="/subscribe"
            className="flex flex-row items-center space-x-3 cursor-pointer
          hover:border-b-2 border-gray-300 animation duration-150"
          >
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <p>Subscribe</p>
          </a>
        </div>
      </div>
    </main>
  );
}
