import React from 'react';

import './style.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-text">
        <p>Front-End Developer</p>
        <p>
          &quot;Talk is cheap. Show me the code.&quot;
          <span className="author">Linus Torvalds</span>
        </p>
        <p>
          &quot;The significant problems we face cannot be solved
          at the same level of thinking we were in when we created them.&quot;
        </p>
        <p className="author">Albert Einstein</p>
      </div>
      <img src="images/eu.jpg" alt="Maximilian" draggable={false} />
    </div>
  );
}

export default Banner;
