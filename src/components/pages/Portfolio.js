import React from 'react';
import triWebsitePhoto from './imgs/SundaeHomepage.png'


export default function Portfolio(props) {
  const cardStyle = {
    width: '18rem',
  };

  const styles = {
    img: {
      width: "200px",
      height: '200px',
      borderRadius: '20%',
      display: 'block'
    }
  };

  const projects = [
    {
        
        name: 'Sunday Sundae Triathlon',
        description: 'An inclusive DIYYYY triathlon in south Seattle',
        url: 'https://sundaesunday.herokuapp.com/',
        scr: {triWebsitePhoto},
    }
    ,
    {
        name: 'EventDash',
        description: 'A tool for folks with bad direction skills, but the need for adventure',
        url: 'https://caseyfee.github.io/EventDash/',
        scr: {triWebsitePhoto},
    
    },
  {
    name: 'Horsieon',
    description: 'A study and update to make a website more Accessible ',
    url: 'https://caseyfee.github.io/Horsieon-Accessibility/',
    scr: {triWebsitePhoto},
  }]

  

  return (
    projects.map ((project, i) => 
    <div className="container">
      <div className="card" key={project.id} style={cardStyle}>
        <img
          style={styles.img}
          className="card-img-top"
          src={project.scr}
          alt="Previous work"
        />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">Description: {project.description}</p>
          <a href={project.url} className="btn btn-primary" target="_blank">
            {props.name} 
          </a>
        </div>
      </div>
    </div>
  ));

    
}



