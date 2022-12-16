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
            <FontAwesomeIcon className='dropdown' 
                              icon={faChevronUp}
            />
        </div>
        {/*  c'est à partir ici je pense qu'il y un problème. parce que je vois sur navigateur seulement un seul élément. 
        sois le text de description, sois la list d'équipement.je n'arrive pas avoir les deux en même temps.  */}
        
        {/* solution avec condition */}
        {{text} !== '' ?
          <div className='collapseText'>{text}</div>
          : null}
         { list.map((li)=>
          <ul>
            <li>{li}</li>
          </ul>)}

        {/* solution pas de condition */}

         {/* <div className='collapseText'>{text}</div>
         { list.map((li)=>
          <ul>
            <li>{li}</li>
          </ul>)} */}

        
            
    </div>
  )
}

export default Collapse