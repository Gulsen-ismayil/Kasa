import Bannerimg from'../../assets/image/Bannerimg.png'
import './Banner.css'

function Banner(){
  return (
    <div className='Banner'>
      <img src={Bannerimg} alt='Banner' />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default Banner