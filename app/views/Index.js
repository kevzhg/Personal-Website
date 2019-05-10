import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">My personal Website</Link></h2>
          <p><b>Welcome employers, colleagues and friends!</b></p>
          <p>This website is Powered by NodeJS and ReactJS</p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        check my <Link to="/skills">skills</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> This is only a landing page, feel free to explore around!</p>
    </article>
  </Main>
);

export default Index;
