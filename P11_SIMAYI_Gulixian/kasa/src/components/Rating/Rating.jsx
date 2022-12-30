import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Rating.css'
// import { useState } from 'react';

function Rating({star}){
  // let [rating,setRating] = useState(star)
  console.log(star);
  return (
    <div className='allStar' >
      {[...Array(5)].map((stars,index) => {

        return index+1 > star ?(
          <div key={index}>
              <FontAwesomeIcon 
                className='star' 
                color={'#e4e5e9'} 
                icon={faStar} />
          </div>
          ) : (
            <div key={index}>
              <FontAwesomeIcon 
                className='star' 
                // color={'#e4e5e9'} 
                icon={faStar} />
          </div>
          )
      })}
    </div>
  )
}

export default Rating