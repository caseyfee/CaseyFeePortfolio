import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import FooterComp from './Footer';
import PortfolioInfo from './pages/PortfolioInfo';
import '../styles.css';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <PortfolioInfo />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='flex ' >
      {/* We are passing the currentPage from state and the function to update it */}
      <div className='max-height-100vh max-width-15vw flex-column max-height-100vh max-width-15vw' >
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className='flex max-width-85vw'>
      {renderPage()}
      </div>
      
      <div >
      <FooterComp />
      </div>
    </div>
  );
}
