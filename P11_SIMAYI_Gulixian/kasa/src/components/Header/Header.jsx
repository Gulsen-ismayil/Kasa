import {NavLink} from'react-router-dom'
import logo from'../../assets/image/logo.png'
import './Header.css'


function Header() {
  return (
    <div className="header">
        <div className="logo">
          <img src={logo} alt="logoHeader"/>
        </div>
        <ul className="menu" >
          <NavLink activeClassName='active' to='/'>Accueil</NavLink>
          <NavLink activeClassName='active' to='/apropos' >A Propos</NavLink>
        </ul>
    </div>
  )
}

export default Header