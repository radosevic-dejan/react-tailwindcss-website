import {NavBarContext} from './NavBarContext';


const style = {
    navListNormal: "hidden md:flex",
    navListDropDown: "absolute bg-zinc-200 w-full px-8",
    navListDropDownItems: "border-b-2 border-zinc-300 w-full",
};

export default function NavBarProvider ({ children }) {
    
    return <NavBarContext.Provider value={{style}}>  {children} </NavBarContext.Provider>
    
}
