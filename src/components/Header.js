import './Header.css';

function Header() {

  return (
    <div className="header__container">
      <div className="header__inner">
        <div className="header__title">PHY's Portfolio</div>
        <div className="header__menu">
          <div className="header__about">About me</div>
          <div className="header__skills">Skills</div>
          <div className="header__portfolio">Portfolio</div>
        </div>
      </div>
    </div>
  )
}

export default Header;