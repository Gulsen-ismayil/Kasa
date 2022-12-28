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
    <div className='apropos-container'>
        <div className='slideshow' >
            <Slideshow carrouselData={carrouselData}/>
        </div>
        <div className='apropos-info' >
            <div className='tag-title-location' >
                  <div className='title-location'>
                        <p>{carrouselData[0].title}</p>
                        <p>{carrouselData[0].location}</p>
                  </div>
                  <Tag tag={carrouselData[0].tags}/>
            </div>
            <div className='name-img-star'>
                  <div className="name-img">
                        <p >{carrouselData[0].host.name}</p>
                        <img src={carrouselData[0].host.picture} 
                              alt={carrouselData[0].host.name} />
                  </div>
                  <Rating />
            </div>
        </div>
        <div className='apropos-collapse'>
              <div className='apropos-collapse-title' >
                  <Collapse type='Description' text={carrouselData[0].description}/>
              </div>
              <div className='apropos-collapse-title' >
                  <Collapse type='Equipements' list={carrouselData[0].equipments}/>
              </div>
        </div>
    </div>
  )
}

export default Logement