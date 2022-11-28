import './Main.css';
import TypingText from './TypingText';

function Main() {
  return(
    <div className="main__bg">
      <div className="main__text1">안녕하세요.</div>
      <div className="main__text2 display-enter"><TypingText text={"신입 프론트엔드 개발자 \n 박혜영 입니다."} /></div>
    </div>
  )
}

export default Main;