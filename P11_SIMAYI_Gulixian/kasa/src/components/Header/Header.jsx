import {Link} from'react-router-dom'
import logo from'../../assets/image/logo.png'
import './Header.css'


function Header() {
  return (
    <div className="header">
        <div className="logo">
          <img src={logo} alt="logoHeader"/>
        </div>
        <ul className="menu" >
          <Link to='/'>Accueil</Link>
          <Link to='/apropos' >A Propos</Link>
        </ul>
    </div>
  )
}

export default Header