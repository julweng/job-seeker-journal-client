import React from 'react';

//import { connect } from 'react';
//import { Link } from 'react-router-dom';

import './navigation-bar.css';
import DropDownTopNav from '../dropDownTopNav/dropDownTopNav';

export default function TopNav(props) {
    return (
      <nav>
        <ul>
          <li className="smallScreenHidden">
            <a
              href="#about"
              aria-label="about"
            >
              About
            </a>
          </li>
          <li className="smallScreenHidden">
            <a
              href="#register"
              aria-label="register"
            >
            Register
            </a>
          </li>
          <li className="smallScreenHidden">
            <a
              href="#login-button"
              aria-label="log in or demo"
            >
            Log In/Demo
            </a>
          </li>
          <li className="smallScreenDisplay">
            <a
              href="#more"
              aria-label="more"
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <DropDownTopNav />
      </nav>
    );
}

//export default connect()(TopNav);
