import { useState } from 'react';
import data from '../data/data';
import './Skills.css';

function Skills() {

  let [img] = useState(data);

  return(
    <div className="skills__container">
      <div className="common__title"><p>Skills</p></div>
      <div className="skills__logo">
        {
          img.map(function(x, index) {
            return <img src={img[index].url} alt="skills" key={index} />
          })
        }
      </div>
    </div>
  )
}

export default Skills;