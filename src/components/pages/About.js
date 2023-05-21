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
        Hi there - I am an engineer who loves to learn and just started on the new career path of learning Full Stack Coding methods. My background was in chemical engineering through the lense of environmental compliance for the last 8 years and am excited to pivot to the tech field. In my free time I love reading, dancing, making pottery, and being outside.

        At this moment in my career, I am seeking a role in a medium size company who create something that adds to the greater good of the world. This could take many forms and I'm excited to work with the career center to network and find my next position.

        Don't hesitate to reach out if you have questions.
        

        Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.

        My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.

        When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching forKorok seeds
        


      </p>
    </div>
  );
}
