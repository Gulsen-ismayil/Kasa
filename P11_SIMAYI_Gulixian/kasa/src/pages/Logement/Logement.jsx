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
        <div className='name-title-location' >
            <div className='title-location'>
                  <p>{carrouselData[0].title}</p>
                  <p>{carrouselData[0].location}</p>
            </div>
            <div className="name-img">
                  <p >{carrouselData[0].host.name}</p>
                  <img src={carrouselData[0].host.picture} 
                       alt={carrouselData[0].host.name} />
            </div>
        </div>
        <div className='tag-star'>
            <Tag tag={carrouselData[0].tags}/>
            <Rating />
        </div>
        <Collapse type='Description' text={carrouselData[0].description}/>
        <Collapse type='Equipements' list={carrouselData[0].equipments}/>
    </div>
  )
}

export default Logement