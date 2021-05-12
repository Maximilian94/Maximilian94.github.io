import React from 'react';
import './style.css';
import languages from '../../data/languages';

function languageCard(data) {
  return (
    <div className="languages-cards">
      {data.map((language) => (
        <div className="language-card">
          <p>{language.name}</p>
          <img src={language.src} alt={language.name} />
        </div>
      ))}
    </div>
  );
}

function WhatIKnow() {
  return (
    <section className="knowledge">
      <section className="what-i-know">
        <p>What I know</p>
        {languageCard(languages)}
      </section>
      <section className="what-im-studying">
        <p>What Im studying</p>
        {languageCard(languages)}
      </section>
    </section>
  );
}

export default WhatIKnow;
