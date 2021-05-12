import React from 'react';
import './style.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <span>Maximilian </span>
        <span>Kaden</span>
      </div>
      <div>
        <nav>
          <ul className="nav-links">
            <li>About me</li>
            <li>My knowledge</li>
            <li>Projects</li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className="social-links">
            <li><img src="https://img.icons8.com/doodle/48/000000/github--v1.png" alt="github" /></li>
            <li><img src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png" alt="linkedin" /></li>
            <li><img src="https://img.icons8.com/doodle/48/000000/whatsapp.png" alt="whatsapp" /></li>
            <li><img src="https://img.icons8.com/doodle/48/000000/gmail.png" alt="gmail" /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
