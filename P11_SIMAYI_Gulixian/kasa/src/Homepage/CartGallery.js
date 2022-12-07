import gallerycart from'../assets/gallerycart.png'

function CartGallery(){
  return (
      <div className="galleryCart" >
         <img className='gallerycart-img' src={gallerycart} alt='gallerycart' />
         <p>Titre de la location</p>
      </div>
  )
}

export default CartGallery