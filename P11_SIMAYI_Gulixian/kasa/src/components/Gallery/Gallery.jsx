import { Link } from 'react-router-dom'
import GalleryCard from '../GalleryCard/GalleryCard'
import data from'../../datas/data.json'
import './Gallery.css'

function Gallery(){
  return (
    <div className='gallery' >
    {data.map((card => 
        <Link key={card.id} to={`/logement/${card.id}`} >
        <GalleryCard image={card.cover} title={card.title} key={card.id}/>
        </Link>
      ))}
      </div>
  )
}

export default Gallery