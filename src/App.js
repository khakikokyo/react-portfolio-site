import './App.css';
import { useState } from 'react';
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

  return (
    <div className="App">
      <Header navigate={navigate} />
      <Main />
      <About />
      <Skills logo={logo} />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
