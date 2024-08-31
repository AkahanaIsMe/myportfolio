import React from 'react';
import Pic1 from '../Assets/Pic1.jpg';
import Pic2 from '../Assets/Pic2.jpg';
import Pic3 from '../Assets/Pic3.png';
import CVJennyRoseTagumpay from '../Assets/CV-JennyRoseTagumpay.pdf';

function Home() {
  return (
    <div className="home-container">
      <div className="left-section-home">
        <h1 className="portfolio-text"></h1>
        <p className="description-text">
          I'm excited to leverage my passion for technology and software development skills to contribute meaningfully to your dynamic team.
          <br />
          <br />
          Seeking a challenging role within a respected organization where I can showcase my abilities and stay at the forefront of emerging IT trends.
        </p>
        <a href={CVJennyRoseTagumpay} download className="download-button">
          DOWNLOAD CV
        </a>
      </div>
      <div className="center-section-home">
        <img src={Pic1} alt="Center Image" className="center-image" />
      </div>
      <div className="right-section-home">
        <img src={Pic2} alt="Square Image" className="right-image square-image" />
        <img src={Pic3} alt="Rectangular Image" className="right-image rectangular-image" />
      </div>
    </div>
  );
}

export default Home;
