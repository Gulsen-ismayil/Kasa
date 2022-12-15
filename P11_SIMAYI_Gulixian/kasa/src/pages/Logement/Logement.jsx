import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'
import Slideshow from '../../components/Slideshow/Slideshow'
import Tag from '../../components/Tag/Tag'
import './Logement.css'

function Logement(){
  return (
    <div>
      <Slideshow />
      <Tag />
      <Rating />
      <Collapse />
    </div>
  )
}

export default Logement