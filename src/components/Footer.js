import React from 'react';

const FooterComp = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
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
