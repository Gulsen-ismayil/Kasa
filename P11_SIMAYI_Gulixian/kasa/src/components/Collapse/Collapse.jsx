import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './Collapse.css'
import { useState } from 'react'

function Collapse({type,text,list}){
  console.log(list);
  console.log(text);
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
            <FontAwesomeIcon className='dropdown'icon={faChevronUp} />
        </div>
      
        {text ?
          (<div className='collapseText'>{text}</div>)
          :
          (<ul className='equipement' >
          {list.map((li,index) =>
            <li className='listEquipement' >{li}</li>
         )}
          </ul>)
        }     
</div>
   )
}

export default Collapse