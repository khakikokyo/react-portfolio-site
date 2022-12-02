import './Footer.css';
import { BsGithub } from 'react-icons/bs';
import ToTop from './ToTop';

function Footer() {
  return(
    <>
      <div className="footer__container">
        <a target="_blank" rel="noreferrer" href="https://github.com/khakikokyo"><BsGithub className="footer__logo" /></a>
        &copy; Park Hye Young. 2022 Portfolio Project.<br/>
        이 사이트는 포트폴리오 용도로 제작되었으며, 상업적인 목적이 없음을 밝힙니다.
        <ToTop />
      </div>
    </>
  )
}

export default Footer;