import './Banner.css'

function Banner({img,text}){
  return (
    <div className='Banner'>
      <img src={img} alt='Banner' />
      <p>{text}</p>
    </div>
  )
}

export default Banner