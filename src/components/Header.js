import React from 'react';

import './Header.css';
import ReactLogo from '../logo.svg';
import GithubLogo from '../assets/Octocat.png';

function Header() {
  return (
    <nav className="nav-bar">
      <div className="left">
        <img className="logo" src={ReactLogo} alt="logo" />
        <p className="desc">
          React Daejeon Community
        </p>
      </div>
      <div className="center">
        <h1 className="title">Lunch Picker</h1>
        <a
          href="https://forms.gle/x1j9tx5qmHVJyvYA8"
          target="_blank"
          rel="noopener noreferrer"
          alt="desc"
          className="desc"
        >
          React Daejeon Community 2nd
        </a>
      </div>
      <div className="right">
        <a href="https://github.com/solidw/react-daejeon-community-2nd" target="_blank" rel="noopener noreferrer">
          <img className="logo" src={GithubLogo} alt="github" />
        </a>
      </div>
    </nav>
  );
}

export default Header;
