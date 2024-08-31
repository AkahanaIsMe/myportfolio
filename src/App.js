// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About'; 
import Contact from './Components/Pages/Contact';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="App-navbar">
            <div className="left-section">
              {/* You can add content for the left section here */}
            </div>
            <div className="center-section">
              <Link to="/">HOME</Link>
              <Link to="/About">ABOUT</Link>
              <Link to="/Contact">CONTACT</Link>
            </div>
            <div className="right-section">
              <input type="text" className="search-bar" placeholder="SEARCH" />
            </div>
          </nav>
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact /> } />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
