import React from 'react';

import './currentSkill.css';

export default function CurrentSkill(props) {
    const warning = <p>~* Add skills to build your profile *~</p>;

    const skillData = props.skills.map((skill, index) =>
      <div className="col-12 individual-skill-container" key={index}>
        <p key={`${skill.name}${index}`} className="col-4">
          {skill.name}
        </p>
        <p key={`${skill.experience}${index}`} className="col-4">
          {skill.experience}
        </p>
        <div className="col-2" key={`editButton-${index}`}>
          <button className="edit-button" key={`edit-button${index}`} type="button">Edit</button>
        </div>
        <div className="col-2" key={`deleteButton-${index}`}>
          <button className="delete-button" key={`delete-button${index}`} type="button">Delete</button>
        </div>
    </div>
  );

  if(!props.skills || props.skills.length === 0) {
    return (
    <div className="row profile-warning-container">
      <div className="col-12">
        {warning}
      </div>
    </div>
    );
  }

  return (
    <div className="row current-skill-container">
      <div className="col-12">
        <h3>Current Skills</h3>
      </div>
      <div className="row">
        <div className="col-4">
          <p><strong>Skill</strong></p>
        </div>
        <div className="col-4">
          <p><strong>Experience Level</strong></p>
        </div>
        <div className="col-4">
          <p><strong>Actions</strong></p>
        </div>
      </div>
      <div className="row">
        {skillData}
      </div>
    </div>
  );
}
