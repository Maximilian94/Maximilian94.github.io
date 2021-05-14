import React from 'react';
import './style.css';
import { knownLanguages, studyingLanguages, tools } from '../../data/languages';

function Introduce() {
  return (
    <section className="introduce">
      <section className="my-knowledge">
        <div className="knowledge-card">
          <p>What I Know</p>
          <div className="knowledge-icons">
            {knownLanguages.map((language) => (
              <div className="language-icon">
                <p>{language.name}</p>
                <img src={language.src} alt={language.name} draggable={false} />
              </div>
            ))}
          </div>
        </div>
        <div className="knowledge-card">
          <p>Tools I&apos;ve worked with</p>
          <div className="knowledge-icons">
            {tools.map((language) => (
              <div className="language-icon">
                <p>{language.name}</p>
                <img src={language.src} alt={language.name} draggable={false} />
              </div>
            ))}
          </div>
        </div>
        <div className="knowledge-card">
          <p>What I am studying:</p>
          <div className="knowledge-icons">
            {studyingLanguages.map((language) => (
              <div className="language-icon">
                <p>{language.name}</p>
                <img src={language.src} alt={language.name} draggable={false} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="about-me">
        <p>Introduce</p>
        <p>Hello! I&apos;m Maximilian Kaden</p>
        <p>
          I am from Recife-PE, Brazil, born in
          1994.
          <br />
          <br />
          Since I was little I always liked
          technology and toys that use logic and
          creativity, such as Lego.
          <br />
          <br />
          In 2012, I finished my high school and
          moved to São Paulo to start the
          airplane pilot course.
          <br />
          <br />
          In 2016, I stayed 3 months in Munich,
          Germany and soon after that I stayed
          another 3 months in San Diego, United
          States to validate the pilot&apos;s license.
          <br />
          <br />
          In 2017, together with a friend, we
          founded a platform for online pilot
          courses, called Lift Aviation.
          <br />
          <br />
          Today I study web development at a
          school called
          {' '}
          <img src="/images/logo_cortada_branca.webp" alt="trybe-logo" />
          .
          <br />
          <br />
          <br />
          The program has more than 1,500
          hours of classroom and online classes
          and covers introduction to software
          development, front-end, back-end,
          computer science, software engineer-
          ing, agile methodologies and behavior-
          al skills.
        </p>
      </section>
    </section>
  );
}

export default Introduce;
