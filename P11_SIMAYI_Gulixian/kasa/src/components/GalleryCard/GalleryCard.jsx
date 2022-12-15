function GalleryCard({image,title}){
  return (
    <div className="galleryCart">
            <img className='gallerycart-img' src={image} alt='gallerycart' />
            <p>{title}</p>
    </div>
  )
}

export default GalleryCard