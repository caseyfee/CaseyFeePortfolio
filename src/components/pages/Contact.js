import React, {useState} from 'react';
import '../style/styles.css';



export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      alert('Please enter your name');
      return;
    }

    if (email.trim() === '') {
      alert('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (message.trim() === '') {
      alert('Please enter your message');
      return;
    }

    // Send the form data to the server

    alert('Thanks for your submission!');
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className='contactForm text-center '>
      
      <h2>Send me a Note</h2>
      <form action = "https://getform.io/f/fa90ba28-f632-4179-9dea-e67f8ba5cf8c" method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br></br>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br></br>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <br></br>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

}
