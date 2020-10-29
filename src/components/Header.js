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
        <p className="desc">React Daejeon Community 2nd</p>
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
