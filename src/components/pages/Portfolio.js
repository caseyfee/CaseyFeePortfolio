import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import triWebsitePhoto from './imgs/SundaeHomepage.png';
import EventDash from './imgs/EventDash.png';
import Horsieon from './imgs/Horiseon.png';
import dearDiary from './imgs/dearDiary.png';
import RegExplained from './imgs/RegExplained.png';
import PopQuiz from './imgs/PopQuiz.png';
import WeatherWizard from './imgs/WeatherWizard.png';
import '../style/styles.css';


export default function Portfolio(props) {

  const projects = [
    {

      name: 'Sunday Sundae Triathlon',
      description: 'An inclusive DIY triathlon in south Seattle',
      url: 'https://sundaesunday.herokuapp.com/',
      github: "https://github.com/caseyfee/SundaeSundayTriathlon",
      photo: triWebsitePhoto ,
    }
    ,
    {
      name: 'EventDash',
      description: 'A tool for folks with bad direction skills, but the need for adventure',
      url: 'https://caseyfee.github.io/EventDash/',
      github: "https://github.com/caseyfee/EventDash",
      photo: EventDash,

    },
    {
      name: 'Horsieon',
      description: 'A study and update to make a website more Accessible ',
      url: 'https://caseyfee.github.io/Horsieon-Accessibility/',
      github: "https://github.com/caseyfee/Horsieon-Accessibility",
      photo: Horsieon,
    },
    {
      name: 'dearDiary',
      description: 'A simple note taking application you can keep track of thoughts ',
      url: 'https://dear-diary-notes-app.herokuapp.com/',
      github: "https://github.com/caseyfee/dearDiary",
      photo: dearDiary,
    },
    {
      name: 'RegExplained',
      description: 'An article I wrote explaining how to understand Regex ',
      url: 'https://gist.github.com/caseyfee/4ff3d7f2057cf90f1cb0436bcd809877',
      github: "https://gist.github.com/caseyfee",
      photo: RegExplained,
    },
    {
      name: 'Popquiz',
      description: 'A quiz about bees you can take and keep track of your score on a leaderboard',
      url: 'https://caseyfee.github.io/PopQuiz_java/',
      github: "https://github.com/caseyfee/PopQuiz_java",
      photo: PopQuiz,
    },
    {
      name: 'Weather Wizard',
      description: 'A weather app with the everyday information you need',
      url: 'https://caseyfee.github.io/WeatherWizard/',
      github: "https://github.com/caseyfee/WeatherWizard",
      photo: WeatherWizard,
    }
    // https://github.com/caseyfee/gCal_who
    // https://caseyfee.github.io/gCal_who/

  ]

// className={`mb-2 custom-col project-card-margin`} xl={4} lg={4} md={6} sm={12}

  return (
    projects.map((project, i) =>
    <Row > 
      <Col sm > 
      <div className=" projects row col-sm-3">
        <div className=" " key={project.id} >
          <div className='card project text-center '>
            <img
              className="card-img-top"
              src={project.photo}
              alt="Previous work"
            />
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">Description: {project.description}</p>
              <a href={project.github} className="btn btn-primary" target="_blank" rel="noreferrer">
                GitHub</a>
              <a href={project.url} className="btn btn-primary" target="_blank" rel="noreferrer">
                Launched
              </a>
            </div>
          </div>
        </div>
      </div>
      </Col>
      </Row>
    )

  );


}



