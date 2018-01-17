import React from 'react';

import './addSkillForm.css';

import SkillEntry from '../common/skillEntry/skillEntry';
import ExperienceLevel from '../common/experienceLevel/experienceLevel';
import AddButton from '../common/addButton/addButton';
import ResetButton from '../common/resetButton/resetButton';
import SaveButton from '../common/saveButton/saveButton';

export default function AddSkillForm(props) {
  return(
    <form className="row" id="add-skill-form">
      <div className="col-12" id="form-title-container">
        <h3>Add/Edit Skills</h3>
      </div>
      <div className="col-12">
        <fieldset>
        <div className="col-6">
          <SkillEntry />
        </div>
        <div className="col-6 experience-container">
          <ExperienceLevel />
        </div>
        </fieldset>
        <SaveButton />
        <AddButton />
        <ResetButton />
      </div>
    </form>
  );
}
