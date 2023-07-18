import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import FooterComp from './Footer';
import PortfolioInfo from './pages/PortfolioInfo';
var url = "https://drive.google.com/file/d/1jqQ2II3jsyrY5Bq0aKBzfW7u8I3MZ_w3/view?usp=sharing"

function openResume(url) {
  const newWindow = window.open(url, "_blank");
  newWindow.focus();
}

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />
      // return <window.open("https://drive.google.com/file/d/1jqQ2II3jsyrY5Bq0aKBzfW7u8I3MZ_w3/view?usp=sharing","_blank");
    }
    if (currentPage === 'Portfolio') {
      return <PortfolioInfo />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }

    return <div className=''>

      {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}

      <div className='p-2 flex-wrap row '>
      <div className = 'col-sm-6 Home'> 
      
      <div className=" Home ">
        <p>
          Hey - I'm <h1>Casey Fee </h1> Growth Mindset | Engineer | Project Manager | Greater Good Gravitator
          <br></br>
          <br></br>
        </p>      

      </div>

      {/* <div className="col-sm-4 Home ">
        <p>
          Want to learn more 
          <h2> About Me?</h2> Check out my 
          <h2> Resume  </h2> or 
          <h2> Projects?</h2> 
          Send me a <h2>Note, Recipe, Joke? </h2>
            
        </p>
      </div> */}
      
      
      </div>

        <div className='col-sm-6 Home'>
          <ul className="nav flex-column">
            Want to learn more
            <h2 className="nav-item">
              <a className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'} href="#about" onClick={() => handlePageChange('About')} >About Me?</a>
            </h2> Check out my 
            <h2 className="nav-item"> 
              <a className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'} href="#resume">Resume</a>
            </h2> Check out my
            <h2 className="nav-item">  
              <a className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'} href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Projects?</a>
            </h2>Send me a 
            <h2 className="nav-item"> 
              <a className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'} href="#contact" onClick={() => handlePageChange('Contact')}>Note, Recipe, Joke, Job?</a>
            </h2>
          </ul>

        </div>
       
      </div>
      <div >
        <FooterComp />
      </div>
    </div>;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  if (currentPage === 'Home') return <div>
    <div className=''>

      <div className='p-2 mx-auto'>
        {renderPage()}
      </div>
      <div >
        <FooterComp />
      </div>
    </div>


  </div>
  else
    return (
      <div className=''>

        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

        <div className='p-2 mx-auto'>
          {renderPage()}
        </div>
        <div >
          <FooterComp />
        </div>
      </div>
    );
}
