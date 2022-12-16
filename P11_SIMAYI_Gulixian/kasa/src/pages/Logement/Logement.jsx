import data from'../../datas/data.json'
import { useParams} from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'
import Slideshow from '../../components/Slideshow/Slideshow'
import Tag from '../../components/Tag/Tag'
import './Logement.css'

function Logement(){
  const {id} = useParams()
  const carrouselData = data.filter((element) => 
                            id === element.id ?
                            element.pictures : null)

  return (
    <div>
      <Slideshow carrouselData={carrouselData}/>
      <Tag />
      <Rating />
     
      <Collapse type='Description' text={carrouselData[0].description}/>
      <Collapse type='Equipements' list={carrouselData[0].equipments}/>
      
    </div>
  )
}

export default Logement