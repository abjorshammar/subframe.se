import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="grey darken-3">
        <div className="nav-wrapper z-depth-3">
          <a href="/" className="brand-logo">
            <img src="logo_small.png" alt="logo" />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to='/'>Start</NavLink></li>
            <li><NavLink to='/streaming'>Streaming</NavLink></li>
            <li><NavLink to='/kontakt'>Kontakt</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}
