import React from 'react';

import './experienceLevel.css';

export default function ExperienceLevel(props) {
  return (
    <div className="col-12">
      <label>Experience</label>
      <div className="col-6 experience-label">
        <label className="col-4">months:</label>
        <input className="col-8" type="number" name="date-month" autoComplete="off" placeholder={props.months} value={props.months} min="0" max="12" required />
      </div>
      <div className="col-6">
        <label className="col-4 experience-label">years:</label>
        <input className="col-8" type="number" name="date-year" autoComplete="off" placeholder={props.years} value={props.years} min="0" max="30" required />
      </div>
    </div>
  );
}

ExperienceLevel.defaultProps = {
  months: 0,
  years: 0
}
