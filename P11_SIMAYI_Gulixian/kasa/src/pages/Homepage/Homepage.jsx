import Banner from"../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
// import ServiceComponent from "../../service/ServiceComponent";
import Bannerimg from'../../assets/image/Bannerimg.png'

function Homepage() {
  return (
    <div className="main" >
      <Banner img={Bannerimg} text='Chez vous, partout et ailleurs'/>
      <Gallery/>
      {/* <ServiceComponent /> */}
    </div>
  )
}

export default Homepage