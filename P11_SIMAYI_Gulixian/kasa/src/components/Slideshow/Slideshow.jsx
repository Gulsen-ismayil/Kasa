
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './Slideshow.css'

function Slideshow({logementData}){
const [currentIndex,setCurrentIndex] = useState(0)
const carrouselPicture = logementData.map((pic) => pic.pictures)

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

  return  carrouselPicture[0].length > 1 ?(
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
            <p className='carrouselNumber' >{currentIndex+1}/{carrouselPicture[0].length}</p>
        </div>
   ) : (
    <div className='carrouselBloc'>
    <img className='carrouselImage' src={carrouselPicture[0][currentIndex]} alt="pic" />
    <p className='carrouselNumber' >{currentIndex+1}/{carrouselPicture[0].length}</p>
</div>
   )
}

export default Slideshow