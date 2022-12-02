import './ToTop.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useEffect, useState } from 'react';

function ToTop() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const [button, setButton] = useState(false);

  useEffect(() => {
    const handleButton = () => {
      if(window.scrollY > 700) {
        setButton(true)
      } else {
        setButton(false)
      }
    }
    window.addEventListener("scroll", handleButton);
    return () => {
      window.removeEventListener("scroll", handleButton);
    }
  }, []);

  return button && (
    <>
      <button onClick={scrollToTop} id="to-top"><AiOutlineArrowUp /></button>
    </>
  )
}

export default ToTop;