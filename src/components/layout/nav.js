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
      <div className="masthead clearfix">
        <div className="inner">
          <h3 className="masthead-brand"><img style={ imgStyle } src="logo.png" alt="logo" /></h3>
          <nav>
            <ul className="nav masthead-nav">
              <li>
                <IndexLink className="nav-link" to='/' activeClassName="active">Start</IndexLink>
              </li>
              <li>
                <Link className="nav-link" to='streaming' activeClassName="active">Streaming</Link>
              </li>
              <li>
                <Link className="nav-link" to='kontakt' activeClassName="active">Kontakt</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
