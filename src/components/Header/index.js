import React, { Component } from 'react';
import './style.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <span>Maximilian </span>
          <span>Kaden</span>
        </div>
        <div>
          <nav>
            <ul>
              <li>About me</li>
              <li>What I know</li>
              <li>What am I studying now</li>
            </ul>
          </nav>
        </div>
        <div>
          <nav>
            <ul>
              <li>GitHub</li>
              <li>Linkedin</li>
              <li>WhatsApp</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;