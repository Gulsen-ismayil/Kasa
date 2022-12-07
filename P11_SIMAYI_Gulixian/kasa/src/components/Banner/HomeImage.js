import mountains from'../../assets/image/mountains.png'
import './Banner.css'

function HomeImage(){
  return (
    <div className='homeImage'>
      <img src={mountains} alt='mountains' />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default HomeImage