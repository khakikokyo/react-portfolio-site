import { Link } from 'react-scroll';
import './Header.css';

function Header() {

  return (
    <div className="header__container">
      <a href="/" className="header__title">PHY's Portfolio</a>
        <div className="header__menu">
          <Link className="header__menu__item" to="1" spy={true} smooth={true}>
            <p>About me</p>
          </Link>
          <Link className="header__menu__item" to="2" spy={true} smooth={true}>
            <p>Skills</p>
          </Link>
          <Link className="header__menu__item" to="3" spy={true} smooth={true}>
            <p>Projects</p>
          </Link>
        </div>
    </div>
  )
}

export default Header;