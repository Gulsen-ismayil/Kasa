import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './Rating.css'

function Rating(){
  const [rating,setRating] = useState(0)
  return (
    <div className='allStar'>
      {[...Array(5)].map((star,i,index) => {
        const ratingValue = i + 1;

        return (
          <label key={index}>
              <input 
                type="radio" 
                name='rating'
                value={ratingValue}
                onClick={() => (setRating(ratingValue))}
              />
              <FontAwesomeIcon 
                className='star' 
                color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'} 
                icon={faStar} />
          </label>
          )
      })}
    </div>
  )
}

export default Rating