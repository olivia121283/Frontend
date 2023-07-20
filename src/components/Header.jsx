import { FaSignInAlt, FaSignOutAlt, FaUser}  from 'react-icons/fa'
import { Link}  from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>App de Peliculas</Link>
        </div>
        <ul>
          <li>
            <Link to='/Login'><FaSignInAlt />Login</Link>
          </li>
          <li>
            <Link to='/Register'><FaUser />Register</Link>
          </li>
        </ul>
    </header>
  )
}

export default Header