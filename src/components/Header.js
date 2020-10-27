import React from 'react';
import './Header.css';
import logo from '../logo.svg';

function Header() {
  return (
    <nav className="nav-bar">
      <div className="left">
        <img className="logo" src={logo} alt="logo" />
        React Daejeon Community
      </div>
      <div className="center">
        <h1 className="title">Lunch Picker</h1>
        <p className="desc">React Daejeon Community 2nd</p>
      </div>
      <div className="right">
        <a href="https://github.com/solidw/react-daejeon-community-2nd" target="_blank" rel="noopener noreferrer">
          <img className="logo" src="https://github.githubassets.com/images/modules/open_graph/github-mark.png" alt="github" />
        </a>
      </div>
    </nav>
  );
}

export default Header;
