import React from 'react';
import '../style/styles.css';
import Lottie from 'lottie-react';
import animationData from "../../lotties/plant-pot.json"

export default function About() {
  return (

    <div className='row'>
      <div className="col-sm-5 Home ">
        <p>
          Hey - I'm <h1>Casey Fee </h1> Growth Mindset | Engineer | Project Manager | Greater Good Gravitator
          <br></br>
          <br></br>
        </p>

    
        {/* <a href="https://iconscout.com/lotties/plant-pot" target="_blank">Free Plant Pot Animated Icon</a>  */}
        

      </div>


      <div className="col-sm-6 Home ">

    {/* function HomeNav ({currentPage, handlePageChange}) {
      return (
        <a
          href="#about"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}
        >
          About
        </a>
      )
    } */}

        <p>
          Want to learn more 
          <h2> About Me?</h2> Check out my 
          <h2> Resume  </h2> or 
          <h2> Projects?</h2> 
          Send me a <h2>Note, Recipe, Joke? </h2>
            
        </p>
      </div>
    </div>
  );
}
