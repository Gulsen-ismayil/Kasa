import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './Collapse.css'
import { useState } from 'react'

function Collapse({type,text}){
  const [isClose, setIsClose] = useState(true)

  return isClose ? (
    <div className='collapseCard' id={type} >
        <div className="collapseTitle" onClick={() => setIsClose(false)} >
            <p >{type}</p>
            <FontAwesomeIcon className='dropdown' 
                              icon={faChevronDown}
            />
        </div>
    </div>
  ) : (
<div className='collapseCard' id={type} >
        <div className="collapseTitle" onClick={() => setIsClose(true)} >
            <p >{type}</p>
            <FontAwesomeIcon className='dropdown' 
                              icon={faChevronUp}
            />
        </div>
            <div className='collapseText'>{text}</div>
    </div>
  )
}

export default Collapse