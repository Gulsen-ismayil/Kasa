import gallerycart from'../../assets/image/gallerycart.png'
import './Gallery.css'

function CartGallery(){
  return (
      <div className="galleryCart" >
         <img className='gallerycart-img' src={gallerycart} alt='gallerycart' />
         <p>Titre de la location</p>
      </div>
  )
}

export default CartGallery