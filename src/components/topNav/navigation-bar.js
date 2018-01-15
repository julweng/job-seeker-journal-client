import React from 'react';

import './navigation-bar.css';

import DropDownTopNav from '../dropDownTopNav/dropDownTopNav';

export default function TopNav(props) {
  return (
    <nav>
      <ul>
        <li className="smallScreenHidden">
          <a
            href="#about"
            aria-label="About"
            onClick={() => props.onAbout()}
          >
            About
          </a>
        </li>
        <li className="smallScreenHidden">
          <a
            href="#register"
            aria-label="register"
            onClick={() => props.onRegister()}
          >
          Register
          </a>
        </li>
        <li className="smallScreenHidden">
          <a
            href="#log-in-demo"
            aria-label="log in or demo"
            onClick={() => props.onLogInDemo()}
          >
          Log In/Demo
          </a>
        </li>
        <li className="smallScreenDisplay">
          <a
            href="#more"
            aria-label="more"
            onClick={() => props.onMore()}
          >
          <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <DropDownTopNav />
    </nav>
  );
}
