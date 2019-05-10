import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kev Zhang</h2>
        <p><a href="mailto:kevzhg@gmail.com">kevzhg@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, It's Kev. I like building things.
      I am a Electrical and Computer Engineering student with a passion for technology. I believe my curricular and extracurricular knowledge in the realm of software development and past experience at various co-op placements makes a perfect combination for what you are looking for in a candidate.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; Kev Zhang <Link to="/">kevzhg.ca</Link>.</p>
    </section>
  </section>
);

export default Nav;
