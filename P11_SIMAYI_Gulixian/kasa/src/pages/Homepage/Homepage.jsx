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
