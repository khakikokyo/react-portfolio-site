import './About.css';
import { useMediaQuery } from 'react-responsive';
import { MdFaceUnlock, MdPhoneIphone } from 'react-icons/md';
import { AiOutlineCalendar, AiOutlineMail } from 'react-icons/ai';

function About() {

  const responsive = useMediaQuery({query: '(max-width:768px)'});

  return(
    <div className="about__container">
      <div className="about__title"><p>About Me</p></div>
      <div className="about__inner">
        <div className="about__photo">
          <img src={process.env.PUBLIC_URL + '/img/hyeyoung.jpg'} alt="me" />
          <p>Mause<br/>Over</p>
        </div>
        <div className="about__text">
          <p>꾸준히 성장하고 발전하는<br/>신입 프론트엔드 개발자 <span>박혜영</span> 입니다.</p>
          <p>저는 주어진 상황에서 맡은 일에 대해 책임감을 가지고 최선을 다하는 사람이 되고 싶었고,<br/>
            그러기 위해 열심히 노력해 왔습니다.<br/>
            그 노력은 항상 저를 어제보다 발전된 사람으로 만들어 주었고,<br/>
            더 나은 내일의 저를 기대할 수 있게 해주었습니다.<br/>
            가독성이 좋고, 작성한 프로그램의 유지보수가 용이한 클린코딩을 지향합니다.<br/>
            새로운 기술, 개인의 성장, 끊임없는 자기 개발은 물론, 협업을 위한 소통을 중시합니다.<br/>
            능동적으로 프로젝트를 수행하고 다양한 기술과 협업 능력을 높이며,<br/>
            프론트엔드 개발자가 지녀야 할 지식을 쌓기 위해 노력하며,<br/>
            항상 새로운 기술에 대한 관심과 열망을 바탕으로 최선을 다해 업무에 임하겠습니다.<br/>
            감사합니다.</p>
        </div>
      </div>
      <div className="about__icon__container">
        <div className="about__icon__item">
          <p className="about__icon"><MdFaceUnlock /></p>
          <p className="about__icon__text"><span>이름</span><br/>박혜영</p>
        </div>
        <div className="about__icon__item">
          <p className="about__icon"><AiOutlineCalendar /></p>
          <p className="about__icon__text"><span>생년월일</span><br/>1990.12.06</p>
        </div>
        <div className="about__icon__item">
          <p className="about__icon"><MdPhoneIphone /></p>
          <p className="about__icon__text"><span>연락처</span><br/>010.7728.5082</p>
        </div>
        <div className="about__icon__item">
          <p className="about__icon"><AiOutlineMail /></p>
          <p className="about__icon__text"><span>이메일</span><br/>jimirar90@naver.com</p>
        </div>
      </div>
    </div>
  )
}

export default About;