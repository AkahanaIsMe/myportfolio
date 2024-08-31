import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import profileImage from '../Assets/profile.jpg';

function Contact() {
  // State to capture form input values
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('jennyrose08', 'jennyrose_08', {
      from_name: senderName,
      from_email: senderEmail,
      to_name: 'Jenny',
      message: message,
      to_email: 'jennyrosetagumpay08@gmail.com'
    }, 'UNg0kEq1mMa0M1epy')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        // Clear form fields after successful submission
        setSenderName('');
        setSenderEmail('');
        setMessage('');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send the message.');
      });
  };

  return (
    <div className="contact-container">
      <div className="left-section-contact">
        <div className="profile-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="contact-info">
            <p><strong>NAME: </strong> Jenny Rose Tagumpay</p>
            <p><strong>EMAIL ADDRESS: </strong> jennyrosetagumpay08@gmail.com</p>
            <p><strong>PHONE NUMBER: </strong> 09751060599</p>
          </div>
        </div>
      </div>
      <div className="right-section-contact">
        <h1>CONTACT ME</h1>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <input 
              type="text" 
              id="fullname" 
              name="fullname" 
              placeholder="Enter your full name" 
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email address" 
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              id="message" 
              name="message" 
              placeholder="Enter your message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
