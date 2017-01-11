import React from 'react';
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="masthead clearfix">
        <div className="inner">
          <h3 className="masthead-brand">subframe</h3>
          <nav>
            <ul className="nav masthead-nav">
              <li activeClassName="active">
                <IndexLink to='/'>Start</IndexLink>
              </li>
              <li>
                <Link to='kontakt'>Kontakt</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
