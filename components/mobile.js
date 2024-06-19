import Image from "next/image";
import Carousel from "./carousel";
import Navbar from "./navbar";

export default function Mobile() {
  return (
    <>
      <div className="bg-white text-black h-full w-full sm:hidden">
        <Navbar />
        <Carousel />
        <div className="flex absolute inset-0 z-10 justify-center items-center">
          <div className="relative w-64 h-64">
            {" "}
            {/* Adjust size as needed */}
            <Image
              src="/kingdavidicon.png"
              alt="Icon"
              layout="fill"
              objectFit="cover"
              className="opacity-50 :hover-opacity-100 z-40"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 z-30 flex items-center justify-center sm:justify-start sm:left-10 md:left-10 lg:left-64 lg:top-[600px] md:top-[400px] top-[500px]">
          <a
            href="https://wa.me/972525205265?text=Hey%2C%20I%20would%20like%20to%20book%20an%20accommodation%21"
            target="_blank"
            className="btn btn-active bg-transparent border-customOrange text-white font-bold py-2 px-4 rounded-3xl hover:bg-customOrange"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}
