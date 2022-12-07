import logo from'../../assets/image/logo.png'
import './Header.css'


function Header() {
  return (
    <div className="header">
        <div className="logo">
          <img src={logo} alt="logoHeader"/>
        </div>
        <ul className="menu" >
          <li>Accueil</li>
          <li>A Propos</li>
        </ul>
    </div>
  )
}

export default Header