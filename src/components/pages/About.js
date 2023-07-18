import React from 'react';
import photo from './imgs/portrait.jpg';
import '../style/styles.css';



export default function About() {
  
  return (
    <div className='row'>
      <div className="col-sm-3">
        <img
          className="selfie"
          src={photo}
          alt="Selfie"
        />
      </div>
      <div className="col-sm-9 aboutMe mr-2 ml-2 p-2">
        <p>
          <h1>Casey Fee </h1> 
          <br></br>

          So far I have, 
          <ul>
          Automation of repeatative tasks saving time and mental capacity;
          </ul>
          <ul>
          Created vast databases of environmental compliance data that track years emissions information;
          </ul>
          <ul>
          Designed applications that were used in extremely remote locations of Alaska with limited service and used by folks where English was not their first language; 
          </ul>
          <ul>
          Concluded a Full Camp Bootcamp at University of Washington with grade of 99%
          </ul>
          <br></br>
          Behind this passion is a chemical engineer degree and 8 years of enviornmentally and mission focused career moves.
          <br></br>
          <br></br>
          In my free time you can find me either working with my hands making pottery, carving spoons, moving my body up a mountains, around a dance floor, or completely still in a library book.
          <br></br>
          <br></br>

          Want to learn more About Me? Check out my Resume Portfolio? or Send me a Note, Recipe, Joke?.
          <br></br>
          <br></br>
          

        </p>
      </div>
    </div>
  );
}
