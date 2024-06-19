import Svg from "./svg";

export default function Navbar() {
  return (
    <>
      <div class="absolute z-20 w-full flex justify-center bg-customOrange bg-opacity-40">
        <div class="navbar-center">
          <ul class="menu menu-horizontal px-1 z-30">
            <li>
              <Svg name="instagram" />
            </li>
            <li>
              <Svg name="tiktok" />
            </li>
            <li>
              <Svg name="google" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
