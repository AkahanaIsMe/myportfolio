import React from 'react';
import cert1 from '../Assets/tosca.png'; // Replace with your actual image file names
import cert2 from '../Assets/devops.png'; // Replace with your actual image file names
import cert3 from '../Assets/network.png'; // Replace with your actual image file names

function About() {
  return (
    <div className="about-container">
      <div className="about-certifications">
        <div className="top-section">
          <p>ABOUT</p>
        </div>
        <div className="bottom-section">
          <h1>CERTIFICATIONS</h1>
        </div>

        <div className="certifications-grid">
          <div className="certification-item">
            <img src={cert1} alt="Certification 1" className="certification-image" />
            <div className="certification-name">Tricentis Tosca Fundamentals</div>
          </div>
          <div className="certification-item">
            <img src={cert2} alt="Certification 2" className="certification-image" />
            <div className="certification-name">Professional Cloud DevOps Engineer</div>
          </div>
          <div className="certification-item">
            <img src={cert3} alt="Certification 3" className="certification-image" />
            <div className="certification-name">Professional Cloud Network Engineer</div>
          </div>
        </div>
      </div>

      <div className="about-skills">
        <div className="top-section-skills">
          <p>ABOUT</p>
        </div>
        <div className="bottom-section-skills">
          <h1>SKILLS</h1>
        </div>
        <div className="skills-sections">
          <div className="skills-item">
            <label>
              <i className="fa-solid fa-face-smile"></i>
              <div className="skills-text">Personal Qualification</div>
            </label>
            <ul className="qualifications-list">
              <li>Team player</li>
              <li>Fast Learner & Eager to learn</li>
              <li>Detail Oriented</li>
              <li>Flexible</li>
              <li>Time Management</li>
              <li>Creative</li>
            </ul>
          </div>
          <div className="skills-item">
            <label>
              <i className="fa-solid fa-code"></i>
              <div className="skills-text">Languages</div>
            </label>
            <ul className="qualifications-list">
              <li>SQL</li>
              <li>React</li>
              <li>Java</li>
              <li>PHP</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>VB.NET</li>
              <li>Cobol</li>
            </ul>
          </div>
          <div className="skills-item">
            <label>
              <i className="fa-solid fa-screwdriver-wrench"></i>
              <div className="skills-text">Tools</div>
            </label>
            <ul className="qualifications-list">
              <li>Tosca</li>
              <li>MySQL</li>
              <li>Visual Studio Code</li>
              <li>Eclipse</li>
              <li>XAMPP</li>
              <li>ATOM</li>
              <li>Sublime</li>
              <li>WordPress</li>
              <li>Spring Boot</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>

       <div className="about-experience">
        <div className="top-section-experience">
          <p>ABOUT</p>
        </div>
        <div className="bottom-section-experience">
          <h1>EXPERIENCE</h1>
        </div>
        {/* Add your experience details here */}
      </div>

    </div>
  );
}

export default About;
