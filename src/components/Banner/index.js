import React from 'react';

import './style.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-text">
        <p>Front-End Developer</p>
        <p>In search of discomfort and problems</p>
        <p>
          &quot;The significant problems we face cannot be solved
          at the same level of thinking we were in when we created them.&quot;
        </p>
        <p>Albert Einstein</p>
      </div>
      <img src="images/eu-removebg-preview.png" alt="Maximilian" />
    </div>
  );
}

export default Banner;
