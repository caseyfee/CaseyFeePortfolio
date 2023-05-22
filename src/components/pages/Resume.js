import React from 'react';
// import Styles from './styles'
// import PDFViewer from 'react-pdf';
// import pdfFile from ''
// import resumeDoc from './imgs/portrait.jpg';
// import { fileURLToPath } from 'url';
// const path = './imgs/portrait.jpg';

export default function Resume() {
  // function downloadDocument() {
  
  //   fetch(fileURLToPath(path))
  //     .then((response) => response.blob())
  //     .then((blob) => (
  //       <a href={window.URL.createObjectURL(blob)} download={path}>
  //         Download Document
  //       </a>
  //     ));
  // }
  
 
  return (
    <div>
      <h1>Resume</h1>
      <div >
        <p>What you need to know</p>
        <ul>
          <li>Passionate engineer who loves to learn</li>
          <li>Dynamic and successful successful career managing, sustaining, and improving systems</li>
          <li>Mission focused</li>
          <a href="https://drive.google.com/file/d/1jqQ2II3jsyrY5Bq0aKBzfW7u8I3MZ_w3/view?usp=sharing" target='_blank' rel="noreferrer">Downloadable Resume</a>

        </ul>
      </div>
      <p>
        <div>
          {/* <PDFViewer src={pdfFile} /> */}
          <div>
            <div>
              <div>
                <h1>Casey Fee</h1>
                <h2>Contact Information</h2>
                <ul>
                  <p>Email: caseyfee3@gmail.com | (630) 800-7909 | Seattle, WA | <a href="linkedin.com/in/cfee"> LinkedIn </a>
                    | <a href="github.com/Caseyfee">GitHub</a></p>
                </ul>
                <h2>Summary</h2>
                <p>Software Engineer/Project Manager who loves to learn and has a proven positive track record in consulting and private industries working on teams and communicating important data driven results.</p>
                <h2>Skills</h2>
                <p>Communication | Project Management | React.js | JavaScript | Express.js | Node.js | HTML5 | CSS3 | jQuery | Bootstrap |  Database Theory | MongoDB | MySQL | Command Line | Git</p>
                <h2>Experience</h2>
                <ul>
                  <li>
                    <h3>Environmental Compliance Specialist III</h3>
                    <a href="https://www.tridentseafoods.com/" target='_blank' rel="noreferrer"> <h4>Trident Seafoods</h4> </a>
                    <h5>Seattle, WA</h5>
                    <h6>April 2020 - May 2022</h6>
                    <ul>
                      <li>Coordinated the building of apps and data tracking within the compliance department to communicate, discover trends and forecast issues</li>
                      <li>Built excel tools to clearly collect and visualize compliance status of 40+ locations</li>
                      <li>Improved regular internal processes to become substantially less time consuming by adding automation and creating systems</li>
                      <li>Collaborated with internal legal team to ensure compliance through contract updates and negotiations with external parties</li>
                      <li>Successfully managed up to 25 open tasks, ranging in size and difficulty with a variety of different departments</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Project Technical II</h3>
                    <h4>Tricord Consulting</h4>
                    <h5>Remote/Seattle, WA</h5>
                    <h6>October 2017 - February 2020</h6>
                    <ul>
                      <li>Ensured air and water permitting compliance with reporting, troubleshooting, calculations, and auditing</li>
                      <li>Developed and maintained trusting relationships through communication and trust with clients</li>
                      <li>Analyzed engineering data and emissions to provide technical, innovative, and strategic solutions</li>
                      <li>Reacted quickly to incoming projects and prioritize multiple clients on a daily basis</li>
                      <li>Perfected reports that were sent to governmental agencies</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Project Engineer, Group Leader, Project Manager</h3>
                    <h4>Sage ATC Environmental Consulting</h4>
                    <h5>Chicago, IL</h5>
                    <h6>July 2015 - October 2017</h6>
                    <ul>
                      <li>Managed relationships, scope, schedule and budgets for a variety of projects between $9,000-$250,000</li>
                      <li>Audited multiple refineries and chemical manufacturing plants against environmental regulations</li>
                      <li>Taught classes across the United States about a myriad of regulations</li>
                      <li>Briefed questions, ideas, and concerns of Region 3 Project Engineers to upper management</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Front of House Lead and Assistant Baker</h3>
                    <h4>Columbia City Bakery</h4>
                    <h5>Seattle, WA</h5>
                    <h6>May 2022 - Present</h6>
                    <ul>
                      <li>Provide positive, inclusive, and calm interactions with 100+ customers a day while packing, preparing and organizing orders</li>
                      <li>Communicate and implement ideas of improvement for increased efficiency and better customer experience</li>
                      <li>Shape and prepare pastries and bread</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Volunteer and Event Coordinator</h3>
                    <h4>XO Seattle</h4>
                    <h5>Seattle, WA</h5>
                    <h6>July 2022 - August 2022</h6>
                    <ul>
                      <li>Coordinated, planned and participated in 6 different positions while the pop-up art gallery ran</li>
                      <li>Created work instructions and guidance documentation for volunteers at all stations</li>
                      <li>Managed unanticipated issues that arose during events and created sustaining solutions to prevent recurrence</li>
                    </ul>
                  </li>
                </ul>
                <h2>Education</h2>
                <ul>
                  <li>
                    <h3>University of Washington</h3>
                    <h4>Full Stack Bootcamp</h4>
                    <h5>June 2023</h5>
                  </li>
                  <li>
                    <h3>University of Illinois at Urbana-Champaign</h3>
                    <h4>Bachelor of Science in Chemical Engineering</h4>
                    <h5>May 2015</h5>
                  </li>
                </ul>
                <h2>Leadership and Volunteering</h2>
                <ul>
                  <li>
                    <h3>FamilyWorks Seattle</h3>
                    <h4>Volunteer</h4>
                    <h5>August 2021 - May 2022</h5>
                    <ul>
                      <li>Provided friendly assistance by guiding individuals to different resources at the Wallingford location</li>
                      <li>Distributed hygienic donations to guests</li>
                    </ul>
                  </li>
                  <li>
                    <h3>ROOTS Young Adult Shelter</h3>
                    <h4>Volunteer</h4>
                    <h5>January 2019 - February 2022</h5>
                    <ul>
                      <li>Provided a safe space for conversation and assisted guests with daily needs</li>
                      <li>Led shelter set-up on Fridays for 45 guest beds, linens, and storage areas</li>
                      <li>Deescalated conflicts and ensured safety of all guests</li>
                      <li>Distributed and organized donations and establish relationships with regular patrons of the services</li>
                    </ul>
                  </li>
                  <li>
                    <h3>ILLINI 4000</h3>
                    <h4>Executive Board-Portrait Project’s Director and Rider</h4>
                    <h5>October 2011 - August 2015</h5>
                    <ul>
                      <li>Contributed to weekly board meetings to guide Illini 4000, a 501(c)3 non-profit towards our mission</li>
                      <li>Oversaw a board of four to eight other students as we developed The Portraits Project</li>
                      <li>Biked more than 4,500 miles from New York to San Francisco during the summer of 2012</li>
                      <li>Organized the compilation of stories of survivors and caretakers collected during each ride by managing a website and Facebook page</li>
                    </ul>
                  </li>
                </ul>
                <h2>References</h2>
                <p>Happy to provide references upon request</p>
              </div>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
}
