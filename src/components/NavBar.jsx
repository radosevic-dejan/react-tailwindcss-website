import { useState} from "react";
import NavBarProvider from "../context/NavBarProvider";
import { Icon } from "../helper/icon";
import { NavList } from "./navbar-components/navList";
import { Button } from "./Button";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <NavBarProvider>
      <div className="fixed w-screen h-[80px] z-10 bg-white drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">

          <div className="flex items-center">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Logo</h1>
            <NavList />
          </div>

          <div className="hidden md:flex pr-4">
            <Button style="border-none bg-transparent text-[#2e3b46] mr-4 hover:text-[#fa6763] " text="Sign In" />
            <Button style="px-8 py-3 border border-[#fa6763] bg-[#fa6763] text-[#2e3b46] hover:text-[#fa6763] hover:bg-white" text="Sign Up"/>
          </div>
          
          {/* show hamburger menu when widht < md */}
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? <Icon iconType="hamburger" className="w-5" /> : <Icon iconType="close" className="w-5" />}
          </div>
        </div>

        {/* drop down menu */}
        {
          nav ? <NavList navType="dropdown">
          <div className="flex flex-col my-4">
            <Button style="bg-transparent text-[#2e3b46] px-8 py-3 mb-4 hover:text-[#fa6763]" text="Sign In"/>
            <Button style="px-8 py-3 bg-[#fa6763]" text="Sign Up"/>
          </div>
        </NavList> : null
        }
      </div>
    </NavBarProvider>
  );
}

export { NavBar };
