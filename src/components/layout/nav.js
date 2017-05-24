import React from 'react';
import { IndexLink, Link } from "react-router";

const imgStyle = {
  "height":"auto",
  "width":"auto",
  "maxWidth":"100px",
  "maxHeight":"50px"
}

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            <img src="logo_small.png" alt="logo" />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><IndexLink to='/'>Start</IndexLink></li>
            <li><Link to='streaming'>Streaming</Link></li>
            <li><Link to='kontakt'>Kontakt</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
