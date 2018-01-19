import React from 'react';

export default function SkillEntry (props) {
    return (
      <div className="col-12">
        <label htmlFor="skills">Skill</label>
        <input name="skill" value={props.skill} autoComplete="off" required />
      </div>
    );
  }
