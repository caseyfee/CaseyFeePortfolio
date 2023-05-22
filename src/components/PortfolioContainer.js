import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import FooterComp from './Footer';
import PortfolioInfo from './pages/PortfolioInfo';


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
    <div className='col'>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      <div className=''>
      {renderPage()}
      </div>
      <div >
      <FooterComp />
      </div>
    </div>
  );
}
