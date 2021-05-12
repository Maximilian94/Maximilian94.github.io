import React from 'react';
import './style.css';
import { knownLanguages, studyingLanguages, tools } from '../../data/languages';

function languageCard(data) {
  return (
    <div className="languages-cards">
      {data.map((language) => (
        <div className="language-card">
          <p>{language.name}</p>
          <img src={language.src} alt={language.name} draggable={false} />
        </div>
      ))}
    </div>
  );
}

function WhatIKnow() {
  return (
    <section className="knowledge">
      <section className="what-i-know">
        <p>What I know:</p>
        {languageCard(knownLanguages)}
      </section>
      <section>
        <p>Tools I&apos;ve worked with</p>
        {languageCard(tools)}
      </section>
      <section className="what-im-studying">
        <p>What I am studying:</p>
        {languageCard(studyingLanguages)}
      </section>
    </section>
  );
}

export default WhatIKnow;
