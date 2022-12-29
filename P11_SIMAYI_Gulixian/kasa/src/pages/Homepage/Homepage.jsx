import Banner from"../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import Bannerimg from'../../assets/image/Bannerimg.png'

function Homepage() {
  return (
    <div className="main" >
      <Banner img={Bannerimg} text='Chez vous, partout et ailleurs'/>
      <Gallery/>
    </div>
  )
}

export default Homepage

// Afficher le nb d'image dans le caroussel
// Masquer les fleches lorsqu'il y a 1 seul photo
// Le rating n'est pas pris en compte
// Lorsqu'on change l'url d'une location il n'y a pas de redirection vers la page 404
// Le lien doit etre souligné lorsqu'on se trouve sur la page correspondante a "Acceuil" ou "a propos"
// Ryade Mecibah
// 22:24
// ryade.mecibah@gmail.com