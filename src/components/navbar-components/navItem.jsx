import {useContext} from 'react'
import {NavBarContext} from '../../context/NavBarContext'

const NavLink = (props) => {
  const {style} = useContext(NavBarContext);
  const {children, linkType} = props
  return (
    <li className={linkType === "dropdown" ? style.navListDropDownItems : ""}>{children}</li>
  )
}

export {NavLink}
