import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from './data/data';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  const [logo] = useState(data);
  const navigate = useNavigate();

  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(()=>{
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <div className="App">
      <Header navigate={navigate} onScroll={onScroll} />
      <Main />
      <About position={position} />
      <Skills logo={logo} />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
