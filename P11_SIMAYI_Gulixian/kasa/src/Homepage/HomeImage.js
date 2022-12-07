import mountains from'../assets/mountains.png'
import '../styles/home.css'

function HomeImage(){
  return (
    <div className='homeImage'>
      <img src={mountains} alt='mountains' />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default HomeImage