import React from 'react';

import './dropDownTopNav.css';

export default function DropDownTopNav(props) {
  return (
    <div className="drop-down-top-nav largeScreenHidden">
      <ul>
        <li>
          <a
            href="#about"
            aria-label="About"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#register"
            aria-label="register"
          >
          Register
          </a>
        </li>
        <li>
          <a
            href="#log-in-demo"
            aria-label="log in or demo"
          >
          Log In/Demo
          </a>
        </li>
      </ul>
    </div>
  );
}
