import React from 'react';
import { NavLink } from 'react-router-dom'
import $ from 'jquery';

export default class Nav extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav({
      closeOnClick: true
    });
  }
  render() {
    return (
      <nav className="grey darken-3">
        <div className="nav-wrapper z-depth-3">
          <a href="/" className="brand-logo">
            <img src="logo_small.png" alt="logo" />
          </a>
          <ul id="slide-out" className="side-nav">
            <li><NavLink to='/'>Start</NavLink></li>
            <li><NavLink to='/streaming'>Streaming</NavLink></li>
            <li><NavLink to='/kontakt'>Kontakt</NavLink></li>
            {/*
            <li className="no-padding">
              <ul className="collapsible collapsible-accordion">
                <li>
                  <a className="collapsible-header">Dropdown<i className="material-icons">arrow_drop_down</i></a>
                  <div className="collapsible-body">
                    <ul>
                      <li><a href="#!">First</a></li>
                      <li><a href="#!">Second</a></li>
                      <li><a href="#!">Third</a></li>
                      <li><a href="#!">Fourth</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            */}
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to='/'>Start</NavLink></li>
            <li><NavLink to='/streaming'>Streaming</NavLink></li>
            <li><NavLink to='/kontakt'>Kontakt</NavLink></li>
          </ul>
          <a href="/" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    );
  }
}
