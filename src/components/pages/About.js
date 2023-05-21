import React from 'react';
import photo from './imgs/portrait.jpg';

const styles = {
  img: {
    width: "200px",
    height: '200px',
    borderRadius: '20%',
    display: 'block'
  }
};

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        <img style={styles.img}
          className="card-img-top"
          src={photo}
          alt="Selfie"
        />
        Hey - I'm Casey Fee. I love to learn and am excited to be falling backwards into this new world of coding. Since 2014, when my first INDEX(MATCH) worked in my Excel Database, I've been diving deeper and deeper into what programming can do. Behind this passion is a chemical engineer degree and 8 years of enviornmentally and mission focussed career moves. 
        
        At this moment in my career, I am seeking a role in a medium size company who create something that adds to the greater good of the world. 
        In my free time you can find me either working with my hands making pottery, carving spoons, moving my body up a moutain or around a dance floor, or completely still in a library book. 

      </p>
    </div>
  );
}
