import React from 'react';
import photo from './imgs/portrait.jpg';
import '../style/styles.css';

export default function About() {
  return (
    <div className='row'>
      <h1 className='name'>Casey Fee</h1>
      <div className="col-sm-3">
        <img
          className="selfie"
          src={photo}
          alt="Selfie"
        />
      </div>
      <div className="col-sm-9 ">
        <p>
          Hey - I'm Casey Fee. I love to learn and am excited to be falling backwards into this new world of coding. Since 2014, when my first INDEX(MATCH) worked in my Excel Database, I've been diving deeper and deeper into what programming can do.
          <br></br>

          <br></br>
          Behind this passion is a chemical engineer degree and 8 years of enviornmentally and mission focused career moves.

          At this moment in my career, I am seeking a role in a medium size company who create something that adds to the greater good of the world.
          <br></br>

          <br></br>
          In my free time you can find me either working with my hands making pottery, carving spoons, moving my body up a moutain or around a dance floor, or completely still in a library book.

        </p>
      </div>
    </div>
  );
}
