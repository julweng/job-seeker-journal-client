import React from 'react';

import './addSkillForm.css';

import SkillEntry from '../../common/skillEntry/skillEntry';
import ExperienceLevel from '../../common/experienceLevel/experienceLevel';
import CrudButton from '../../common/crudButton/crudButton';

export default function AddSkillForm(props) {
    if(props.addSkill) {
      return false;
    }
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
            </div>
            <div className="row">
              <div className="col-4">
                <CrudButton
                  type={`submit`}
                  text={`Save`}
                  className={`save-button`} />
              </div>
              <div className="col-4">
                <CrudButton
                  type={`button`}
                  text={`Cancel`}
                  className={`cancel-button`}
                />
              </div>
              <div className="col-4">
                <CrudButton
                  type={`button`}
                  text={`Reset`}
                  className={`reset-button`}
                />
              </div>
          </div>
        </form>
    );
  }
