import React from 'react';

import './addSkillForm.css';

import SkillEntry from '../skillEntry/skillEntry';
import ExperienceLevel from '../experienceLevel/experienceLevel';
import AddButton from '../addButton/addButton';
import ResetButton from '../resetButton/resetButton';
import SaveButton from '../saveButton/saveButton';

export default function AddSkillForm(props) {
  return(
    <form className="row">
      <div className="col-12" id="form-title-container">
        <h3>Add/Edit Skills</h3>
      </div>
      <div className="col-12" id="form-section">
        <fieldset>
          <SkillEntry />
          <ExperienceLevel />
        </fieldset>
        <SaveButton />
        <AddButton />
        <ResetButton />
      </div>
    </form>
  );
}
