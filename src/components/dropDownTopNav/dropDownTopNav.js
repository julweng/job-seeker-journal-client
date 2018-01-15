import React from 'react';

import './dropDownTopNav.css';

export default function DropDownTopNav(props) {
  return (
    <div className="drop-down-top-nav toggle-smallScreenDisplay">
      <ul>
        <li>
          <a
            href="/about"
            aria-label="About"
            onClick={() => props.onAbout()}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/register"
            aria-label="register"
            onClick={() => props.onRegister()}
          >
          Register
          </a>
        </li>
        <li>
          <a
            href="/log-in-demo"
            aria-label="log in or demo"
            onClick={() => props.onLogInDemo()}
          >
          Log In/Demo
          </a>
        </li>
      </ul>
    </div>
  );
}
