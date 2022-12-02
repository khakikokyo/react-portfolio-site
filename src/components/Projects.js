import './Projects.css';
import Project from './Project';
import { useState } from 'react';
import projectData from '../data/projectData';

function Projects({navigate}) {

  let [project] = useState(projectData);

  return(
    <div className="projects__container" id="3">
      <div className="common__title"><p>Projects</p></div>
      <div className="projects__box">
        {
          project.map(function(a, index) {
            return (<Project project={project[index]} navigate={navigate} key={index} />)
          })
        }
      </div>
    </div>
  )
}

export default Projects;