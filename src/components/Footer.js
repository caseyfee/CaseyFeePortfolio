import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const FooterComp = () => {
  return (
    <body className='h-50 d-flex flex-column'>
    <footer className='footer mt-auto py-3 fixed-bottom'>
      <div className="">
        <div className="row">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled"  >
              <a href="https://github.com/caseyfee" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/cfee/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://open.spotify.com/user/12124142261" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faSpotify} />
              </a>
            </ul>
          </div>
          <div className="col-md-4">
            <p className="copyright"> &copy; 2023 CF</p>
          </div>
        </div>
      </div>
    </footer>
    </body>
  );
};

export default FooterComp;
