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
      description: 'An inclusive DIY triathlon in south Seattle',
      url: 'https://sundaesunday.herokuapp.com/',
      github: "https://github.com/caseyfee/SundaeSundayTriathlon",
      scr: { triWebsitePhoto },
    }
    ,
    {
      name: 'EventDash',
      description: 'A tool for folks with bad direction skills, but the need for adventure',
      url: 'https://caseyfee.github.io/EventDash/',
      github: "https://github.com/caseyfee/EventDash",
      scr: { triWebsitePhoto },

    },
    {
      name: 'Horsieon',
      description: 'A study and update to make a website more Accessible ',
      url: 'https://caseyfee.github.io/Horsieon-Accessibility/',
      github: "https://github.com/caseyfee/Horsieon-Accessibility",
      scr: { triWebsitePhoto },
    },
    {
      name: 'dearDiary',
      description: 'A simple note taking application you can keep track of thoughts ',
      url: 'https://dear-diary-notes-app.herokuapp.com/',
      github: "https://github.com/caseyfee/dearDiary",
      scr: { triWebsitePhoto },
    },
    {
      name: 'RegExplained',
      description: 'An article I wrote explaining how to understand Regex ',
      url: 'https://gist.github.com/caseyfee/4ff3d7f2057cf90f1cb0436bcd809877',
      github: "https://gist.github.com/caseyfee",
      scr: { triWebsitePhoto },
    },
    {
      name: 'OurSpace',
      description: 'A backend for a social media site, currently used by critters',
      url: 'https://github.com/caseyfee/OurSpace',
      github: "https://github.com/caseyfee/OurSpace",
      scr: { triWebsitePhoto },
    },
    {
      name: 'Weather Wizard',
      description: 'A weather app with the everyday information you need',
      url: 'https://caseyfee.github.io/WeatherWizard/',
      github: "https://github.com/caseyfee/WeatherWizard",
      scr: { triWebsitePhoto },
    }
    // https://github.com/caseyfee/gCal_who
    // https://caseyfee.github.io/gCal_who/
  ]



  return (
    projects.map((project, i) =>
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
            <a href={project.github} className="btn btn-primary" target="_blank" rel="noreferrer">
            GitHub</a>
            <a href={project.url} className="btn btn-primary" target="_blank" rel="noreferrer">
              {props.name}
            </a>
          </div>
        </div>
      </div>
    ));


}



