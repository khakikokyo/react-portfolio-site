import { GoThreeBars } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {

  const navigate = useNavigate();

  return (
    <div className="header__container">
      <div className="header__title" onClick={()=>{ navigate('/') }}>PHY's Portfolio</div>
        <div className="header__menu">
          <div className="header__menu__item">About me</div>
          <div className="header__menu__item">Skills</div>
          <div className="header__menu__item">Portfolio</div>
        </div>
        <div className="header__toogleBtn">
          <GoThreeBars />
        </div>
        
    </div>
  )
}

export default Header;