import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.webp';

export const Header = () => {
  return (
    <header>
      <Link to='/' className='logo'>
        <img src={Logo} alt='' />
        <span>RouteGIFter</span>
      </Link>

      <nav className='navigation'>
        <NavLink to='/' className='link' end>
          Home
        </NavLink>
        <NavLink to='/products' className='link'>
          Products
        </NavLink>
        <NavLink to='/contact' className='link'>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};