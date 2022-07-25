import { useState, useContext } from "react";
import NavBarProvider from "../context/NavBarProvider";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { NavList } from "./navbar-components/navList";
import { Button } from "./Button";

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
            <Button style="border-none bg-transparent text-black mr-4" text="Sign In" />
            <Button style="px-8 py-3" text="Sign Up"/>
          </div>
          {/* show hamburger menu when widht < md */}
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? <TiThMenu className="w-5" /> : <TiTimes className="w-5" />}
          </div>
        </div>

        {/* drop down menu */}
        {
          nav ? <NavList navType="dropdown">
          <div className="flex flex-col my-4">
            <Button style="bg-transparent text-indigo-500 px-8 py-3 mb-4" text="Sign In"/>
            <Button style="px-8 py-3" text="Sign Up"/>
          </div>
        </NavList> : null
        }
      </div>
    </NavBarProvider>
  );
}

export { NavBar };
