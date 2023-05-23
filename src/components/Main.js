import './Main.css';
import TypingText from './TypingText';

function Main() {
  return(
    <div className="main__bg">
      <div className="main__text1">안녕하세요.</div>
      <div className="main__text2 display-enter"><TypingText text={"방문해 주셔서 감사합니다. \n 저는 박혜영 입니다."} /></div>
    </div>
  )
}

export default Main;