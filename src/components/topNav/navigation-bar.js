import React from 'react';

import './navigation-bar.css';

export default function TopNav(props) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#about"
            aria-label="About"
            onClick={() => props.onAbout()}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#sign-up-log-in"
            aria-label="sign up or log in"
            onClick={() => props.onSignUpLogIn()}
          >
          Sign up/Log In
          </a>
        </li>
      </ul>
    </nav>
  );
}
