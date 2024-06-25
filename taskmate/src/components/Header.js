import logo from '../assets/logo.avif';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt='' />
      <a href='/'>Home</a>
    </header>
  );
}
