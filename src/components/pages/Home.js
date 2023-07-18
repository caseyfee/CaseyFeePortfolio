import React from 'react';
import '../style/styles.css';
import Lottie from 'lottie-react';
import animationData from "../../lotties/plant-pot.json"

export default function Home() {
  return (

    <div className=''>
      <div className="col-sm-4 Home ">
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
  );
}
