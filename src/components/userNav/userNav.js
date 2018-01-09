import React from 'react';

import './navigation-bar.css';

export default function TopNav(props) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#dashboard"
            aria-label="dashboard"
            onClick={() => props.onDashBoard()}
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#profile"
            aria-label="profile"
            onClick={() => props.onProfile()}
          >
          Profile
          </a>
        </li>
        <li>
          <a
            href="#add-job"
            aria-label="add job"
            onClick={() => props.onAddJob()}
          >
          Add Job
          </a>
        </li>
        <li>
          <a
            href="#job-collection"
            aria-label="job collection"
            onClick={() => props.onJobCollection()}
          >
          Job Collection
          </a>
        </li>
        <li>
          <a
            href="#log-out"
            aria-label="log out"
            onClick={() => props.onLogOut()}
          >
          Log Out
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
    </nav>
  );
}
