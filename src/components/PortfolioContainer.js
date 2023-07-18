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
      return <window.open("https://drive.google.com/file/d/1jqQ2II3jsyrY5Bq0aKBzfW7u8I3MZ_w3/view?usp=sharing","_blank");
    }
    if (currentPage === 'Portfolio') {
      return <PortfolioInfo />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <Home />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

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
