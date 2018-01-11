import React from 'react';

import './skillEntry.css';

export default function SkillEntry(props) {
  return (
    <div className="col-6">
      <label htmlFor="skills">Skills</label>
      <input name="skill" placeholder="HTML5" autoComplete="off" required />
    </div>
  );
}
