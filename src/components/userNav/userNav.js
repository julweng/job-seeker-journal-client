import React from 'react';

import '../topNav/navigation-bar.css';

export default function UserNav(props) {
  return (
    <nav>
      <ul>
        <li className="smallScreenHidden">
          <a
            href="#dashboard"
            aria-label="dashboard"
            onClick={() => props.onDashboard()}
          >
            Dashboard
          </a>
        </li>
        <li className="smallScreenHidden">
          <a
            href="#profile"
            aria-label="profile"
            onClick={() => props.onProfile()}
          >
          Profile
          </a>
        </li>
        <li className="smallScreenHidden">
          <a
            href="#add-edit-job"
            aria-label="add or edit job"
            onClick={() => props.onAddJob()}
          >
          Add/Edit Job
          </a>
        </li>
        <li className="smallScreenHidden">
          <a
            href="#job-collection"
            aria-label="job collection"
            onClick={() => props.onJobCollection()}
          >
          Job Collection
          </a>
        </li>
        <li className="smallScreenHidden">
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
