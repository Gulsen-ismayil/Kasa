import footerlogo from'../assets/footerlogo.png'
import footerText from'../assets/footerText.png'

function Footer(){
  return (
    <div className="footer" >
        <img className='footerlogo' src={footerlogo} alt='footerlogo' />
        <img className='footertext' src={footerText} alt='footertext' />
    </div>
  )
}

export default Footer