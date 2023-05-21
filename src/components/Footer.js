import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub,faSpotify, faLinkedin} from '@fortawesome/free-brands-svg-icons';



const FooterComp = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* <ul className="list-unstyled row">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul> */}
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
            <FontAwesomeIcon icon={faGithub} href="https://github.com/caseyfee" target="_blank" />
            <FontAwesomeIcon icon={faLinkedin} href = "https://www.linkedin.com/in/cfee/" target="_blank" /> 

            <FontAwesomeIcon icon={faSpotify} href = "https://open.spotify.com/user/12124142261" target="_blank" />


             {/* <li><a href="https://github.com/caseyfee"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://open.spotify.com/user/12124142261"><i className="fab fa-spotify"></i></a></li>
              <li><a href="https://www.linkedin.com/in/cfee/"><i className="fab fa-linkedin-in"></i></a></li> */}
            </ul>
          </div>
          <div className="col-md-4">
            <p className="copyright">Copyright &copy; 2023 Casey Fee</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
