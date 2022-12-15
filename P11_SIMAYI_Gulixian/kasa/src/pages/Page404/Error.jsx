import {Link} from'react-router-dom'
import './Error.css'

function Error(){
  return (
    <div className='error'>
      <h1 className='errornumber'>404</h1>
      <p className='errortext'>Oups! La page que vous demandez n'existe pas.</p>
      <Link className='errorlink' to='/'>Retourner sur la pge d'accueil</Link>
    </div>
  )
}

export default Error