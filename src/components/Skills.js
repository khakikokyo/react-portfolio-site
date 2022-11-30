import './Skills.css';

function Skills({logo}) {
  return(
    <div className="skills__container">
      <div className="common__title"><p>Skills</p></div>
      <div className="skills__logo">
        {
          logo.map(function(x, index) {
            return <img src={logo[index].url} alt="skills" key={index} />
          })
        }
      </div>
    </div>
  )
}

export default Skills;