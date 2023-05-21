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
      </p>
    </div>
  );
}
