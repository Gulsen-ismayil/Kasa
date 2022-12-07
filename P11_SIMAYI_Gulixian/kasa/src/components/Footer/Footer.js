import footerlogo from'../../assets/image/footerlogo.png'
import footerText from'../../assets/image/footerText.png'
import './Footer.css'

function Footer(){
  return (
    <div className="footer" >
        <img className='footerlogo' src={footerlogo} alt='footerlogo' />
        <img className='footertext' src={footerText} alt='footertext' />
    </div>
  )
}

export default Footer