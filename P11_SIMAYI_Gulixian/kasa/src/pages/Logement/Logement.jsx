import data from'../../datas/data.json'
import { useParams} from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'
import Slideshow from '../../components/Slideshow/Slideshow'
import Tag from '../../components/Tag/Tag'
import Error from'../Page404/Error'

import './Logement.css'

function Logement(){
  const {id} = useParams()
  const logementData = data.filter((element) => 
                            id === element.id ?
                            element : null)

  return logementData.length !== 0 ? (
    <div className='apropos-container'>
        <div className='slideshow' >
            <Slideshow logementData={logementData}/>
        </div>
        <div className='apropos-info' >
            <div className='tag-title-location' >
                  <div className='title-location'>
                        <p>{logementData[0].title}</p>
                        <p>{logementData[0].location}</p>
                  </div>
                  <Tag tag={logementData[0].tags}/>
            </div>
            <div className='name-img-star'>
                  <div className="name-img">
                        <p >{logementData[0].host.name}</p>
                        <img src={logementData[0].host.picture} 
                              alt={logementData[0].host.name} />
                  </div>
                  <Rating star={logementData[0].rating}/>
            </div>
        </div>
        <div className='apropos-collapse'>
              <div className='apropos-collapse-title' >
                  <Collapse type='Description' text={logementData[0].description}/>
              </div>
              <div className='apropos-collapse-title' >
                  <Collapse type='Equipements' list={logementData[0].equipments}/>
              </div>
        </div>
    </div>
  ): <Error />
}

export default Logement