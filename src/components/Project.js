import './Projects.css';
import { FaChevronRight } from 'react-icons/fa';

function Project({project, navigate}) {
  return(
    <div className="projects__inner">
      <img src={ project.imgUrl } alt="project img" />
      <p className="projects__title">{ project.title }</p>
      <p className="projects__contents">{ project.contents }</p>
      <p className="projects__skill">{ project.skill }</p>
      <div className="projects__move">
        <a className="projects__move__item" target="_blank" rel="noreferrer" href={project.gitUrl}>자세히 보기 <FaChevronRight className="logo" /> GITHUB</a>
        <a className="projects__move__item" target="_blank" rel="noreferrer" href={project.siteUrl}>자세히 보기 <FaChevronRight className="logo" /> SITE</a>
      </div>
    </div>
  )
}

export default Project;