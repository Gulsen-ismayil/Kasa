
import { useParams} from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import data from'../../datas/data.json'
import './Slideshow.css'

function Slideshow(){
const {id} = useParams()
const [currentIndex,setCurrentIndex] = useState(0)
const carrouselData = data.filter((element) => 
                            id === element.id ?
                            element.pictures : null)
const carrouselPicture = carrouselData.map((pic) => pic.pictures)

const goToPrev = () => {
  const isFirstPic = currentIndex === 0
  const newIndex = isFirstPic ? carrouselPicture[0].length-1 : currentIndex-1
  setCurrentIndex(newIndex)
}

const goToNext = () => {
  const isFirstPic = currentIndex === carrouselPicture[0].length-1
  const newIndex = isFirstPic ? 0 : currentIndex+1
  setCurrentIndex(newIndex)
}

  return  (
        <div className='carrouselBloc'>
            <img className='carrouselImage' src={carrouselPicture[0][currentIndex]} alt="pic" />
            <div className='carrouselIcon' >
                <FontAwesomeIcon className='chevronLeft' 
                                  icon={faChevronLeft} 
                                  onClick={() => goToPrev()}/>
                <FontAwesomeIcon className='chevronRight' 
                                  icon={faChevronRight} 
                                  onClick={() => goToNext()}/>            
            </div>
        </div>
   )
}

export default Slideshow