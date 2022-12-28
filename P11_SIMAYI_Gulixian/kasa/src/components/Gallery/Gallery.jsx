import { Link } from 'react-router-dom'
// import {useState} from'react'
import GalleryCard from '../GalleryCard/GalleryCard'
import data from'../../datas/data.json'
import './Gallery.css'

function Gallery(){
  // let [locations,setLocations] = useState([])
  // useEffect(() => {
// utiliser setLOcations pour populer 
// chercher comment populer un tablequ en ce ba/ how to populate an array from json file
  // },[])
  return (
    <div className='gallery' >
      {/* locations.map */}
    {data.map((card => 
        <Link key={card.id} to={`/logement/${card.id}`} >
        <GalleryCard image={card.cover} title={card.title} key={card.id}/>
        </Link>
      ))}
      </div>
  )
}

export default Gallery