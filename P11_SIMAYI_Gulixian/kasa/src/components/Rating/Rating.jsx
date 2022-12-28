import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Rating.css'

function Rating(){

  return (
    <div className='allStar' >
      {[...Array(5)].map((star,index) => {

        return (
          <div key={index}>
              <FontAwesomeIcon 
                className='star' 
                color={'#e4e5e9'} 
                icon={faStar} />
          </div>
          )
      })}
    </div>
  )
}

export default Rating