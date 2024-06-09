import Image from "next/image";
import MidContainer from "./midcontainer";
import Svg from './components/svg'; // Make sure the path is correct
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className={`h-screen w-full relative ${montserrat.className}`}>
      {/* Black section taking up 1/3 of the screen with text */}
      <div className="bg-customBlack w-1/3 h-full absolute inset-y-0 left-0 flex items-center justify-start hidden lg:flex">
        <div className="text-white text-xl p-4 absolute bottom-10 ml-10">
          <h1 className="writing-mode-vertical-rl font-bold mb-20tracking-wider">Follow us</h1> <br />
          <Svg name="instagram" />
          <Svg name="facebook" />
          <Svg name="tiktok" />
        </div>
      </div>

      {/* Section with the background image taking up 2/3 of the screen on large devices, full screen on smaller */}
      <div className="w-full lg:w-2/3 h-full absolute inset-y-0 right-0">
        <Image
          src="/background.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="text-customOrange font-extrabold lg:text-8xl text-5xl sm:text-6xl tracking-wide absolute inset-0 flex items-center justify-center sm:justify-start sm:left-10 md:left-10 lg:left-64 lg:top-80 md:top-52 top-64">
          KING DAVID
        </div>
        <div className="text-2xl tracking-wide font-bold absolute inset-0 flex items-center justify-center sm:justify-start sm:left-10 md:left-10 lg:left-64 lg:top-24 2xl:top-40 md:top-24 top-24 right-5">
          Eilat, Israel
        </div>
      </div>

      {/* Middle container adjusted for better visibility and space */}
      <div className="absolute inset-y-0 left-1/3 transform -translate-x-1/2 w-1/4 flex items-center justify-center hidden lg:flex">
        <MidContainer />
      </div>
    </div>
  );
}
