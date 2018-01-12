import React from 'react';

export default function SkillEntry(props) {
  return (
    <div className="col-6">
      <label htmlFor="skills">Skill</label>
      <input name="skill" placeholder="HTML5" autoComplete="off" required />
    </div>
  );
}
