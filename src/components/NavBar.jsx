import { useState, useContext } from "react";
import NavBarProvider from "../context/NavBarProvider";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { NavList } from "./navbar-components/navList";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <NavBarProvider>
      <div className="w-screen h-[80px] z-10 bg-zinc-300 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Logo</h1>
            <NavList />
          </div>
          <div className="hidden md:flex pr-4">
            <button className="border-none bg-transparent text-black mr-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
          {/* show hamburger menu when widht < md */}
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? <TiThMenu className="w-5" /> : <TiTimes className="w-5" />}
          </div>
        </div>

        {/* drop down menu */}
        <NavList navType="dropdown">
          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-500 px-8 py-3 mb-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
        </NavList>
      </div>
    </NavBarProvider>
  );
}

export { NavBar };
