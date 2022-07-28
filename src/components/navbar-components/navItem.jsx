import { useContext } from "react";
import { NavBarContext } from "../../context/NavBarContext";
import { Link, animateScroll as scroll } from "react-scroll";

const NavLink = (props) => {
  const { style } = useContext(NavBarContext);
  const { children, linkType } = props;
  return (
    <li className={linkType === "dropdown" ? style.navListDropDownItems : ""}>
      <Link className="hover:cursor-pointer" to={children.toLowerCase()} smooth={true} duration={500}>{children}</Link>
    </li>
  );
};

export { NavLink };
