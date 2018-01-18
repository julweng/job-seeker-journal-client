import React from 'react';

import './experienceLevel.css';

export default function ExperienceLevel(props) {
  return (
    <div className="col-12">
      <div className="col-6">
        <label className="experience-label" id="date-month">months:
        <input type="number" name="date-month" autoComplete="off" value={props.months} min="0" max="12" required /></label>
      </div>
      <div className="col-6">
        <label className="experience-label" id="date-year">years:
        <input type="number" name="date-year" autoComplete="off" value={props.years} min="0" max="30" required /></label>
      </div>
    </div>
  );
}
