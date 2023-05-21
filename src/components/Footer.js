import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons';



const FooterComp = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ul className="list-unstyled row">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
            <FontAwesomeIcon icon={faLaptopCode} style={{color: "#00060f",}} />

              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-spotify"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <p class="copyright">Copyright &copy; 2023 Casey Fee</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
