import { useState, useEffect } from 'react';

const TypingText = ({text, speed, fontSize, color}) => {
  TypingText.defaultProps = {
    fontSize: '1em', // 기본값
    color: 'black' // 기본값
  }
  const [contents, setContents] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    let typingText = text ? text : ""; // 기본값
    let typingSpeed = speed ? speed : 200; // 기본값
    const interval = setInterval(() => {
      setContents((contents) => {
        let updated = text;
        updated = contents + typingText[count];
        return updated;
      });
      setCount(count + 1);
    }, typingSpeed);
    count === typingText.length && clearInterval(interval);
    return () => clearInterval(interval);
  })
  return (
    <p style={{fontSize:`${fontSize}`, color:`${color}`}}>{contents}</p>
  )
}

export default TypingText;