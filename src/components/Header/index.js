import React from 'react';
import './style.css';

const iconPath = 'https://img.icons8.com/doodle/48/000000/';

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
            <li>
              <a href="https://github.com/Maximilian94" target="_blank" rel="noreferrer">
                <img src={`${iconPath}github--v1.png`} alt="github" />
              </a>

            </li>
            <li>
              <a href="https://www.linkedin.com/in/dev-maximilian-kaden/" target="_blank" rel="noreferrer">
                <img src={`${iconPath}linkedin--v2.png`} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=5511948788601&text=Hi%20Max!%20Let%27s%20code%3F" target="_blank" rel="noreferrer">
                <img src={`${iconPath}whatsapp.png`} alt="whatsapp" />
              </a>
            </li>
            <li>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mkadenfilgo@gmail.com" target="_blank" rel="noreferrer">
                <img src={`${iconPath}gmail.png`} alt="gmail" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
