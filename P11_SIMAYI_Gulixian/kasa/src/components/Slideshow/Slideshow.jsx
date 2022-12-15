
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import data from'../../datas/data.json'
import './Slideshow.css'

function Slideshow(){
const {id} = useParams()

  return  (
    <div>
        <div className='carrouselBloc'>
            <FontAwesomeIcon className='chevronLeft'
                            icon={faChevronLeft} />
            <FontAwesomeIcon className='chevronRight'
                            icon={faChevronRight} />
            {data.map((element) => 
            id === element.id ?
            element.pictures.map((picture,index) =>
            <div className='SlideshowBloc' key={index} >
                    <img className='SlideshowImg' src={picture} alt='' />
            </div>
            )
            :null
            )}
        </div>
    </div>
  )
}

export default Slideshow