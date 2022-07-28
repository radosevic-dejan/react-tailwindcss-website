import {useContext} from 'react';
import {NavLink} from './navItem';
import { NavBarContext } from '../../context/NavBarContext';

const linkData =["Home", "Marketing", "Services","Blog", "Contact"];

const NavList = (props) => {
    const {children, navType} = props;
    const {style} = useContext(NavBarContext);

  return (
    <ul className={navType === "dropdown" ? style.navListDropDown : style.navListNormal}>
        {
            linkData.map((item, index) => {
                return (
                    <NavLink key={index} linkType={navType}>{item}</NavLink>
                )
            })
        }  
        {children}      
    </ul>
  )
}

export  {NavList}