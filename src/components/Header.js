import './Header.css';

function Header({navigate}) {
  return (
    <div className="header__container">
      <div className="header__title" onClick={()=>{ navigate('/') }}>PHY's Portfolio</div>
        <div className="header__menu">
          <div className="header__menu__item">About me</div>
          <div className="header__menu__item">Skills</div>
          <div className="header__menu__item">Project</div>
        </div>
    </div>
  )
}

export default Header;