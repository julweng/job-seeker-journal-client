import React from 'react';

import '../addSkillForm/addSkillForm.css';

import SkillEntry from '../../common/skillEntry/skillEntry';
import ExperienceLevel from '../../common/experienceLevel/experienceLevel';
import ResetButton from '../../common/resetButton/resetButton';
import SaveButton from '../../common/saveButton/saveButton';
import CancelButton from '../../common/cancelButton/cancelButton';

export default class EditSkillForm extends React.Component {
  render () {
    return (
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
            <div className="col-4">
              <SaveButton />
            </div>
            <div className="col-4 cancel-add-skill-button-container">
              <CancelButton handleClick={this.props.handleClick} />

            </div>
            <div className="col-4">
              <ResetButton />
            </div>
          </div>
        </form>
    );
  }
}
