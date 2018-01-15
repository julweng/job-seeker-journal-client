import React from 'react';

import './experienceLevel.css';

export default function ExperienceLevel(props) {
  return (
    <div className="col-6">
      <label>Experience</label>
      <div className="col-6">
        <input type="number" name="date-month" autoComplete="off" placeholder={props.months} min="0" max="12" required />
        <p>months</p>
      </div>
      <div className="col-6">
        <input type="number" name="date-year" autoComplete="off" placeholder={props.years} min="0" max="30" required />
        <p>years</p>
      </div>
    </div>
  );
}

ExperienceLevel.defaultProps = {
  months: 0,
  years: 0
}
