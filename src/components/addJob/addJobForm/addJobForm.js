import React from 'react';

import './addJobForm.css';

import JobDetailEntry from '../../common/jobDetailEntry/jobDetailEntry';
import DateInput from '../../common/dateInput/dateInput';
import AddButton from '../../common/addButton/addButton';
import ResetButton from '../../common/resetButton/resetButton';
import SaveButton from '../../common/saveButton/saveButton';
import SkillEntry from '../../common/skillEntry/skillEntry';
import ExperienceLevel from '../../common/experienceLevel/experienceLevel';
import AddProgress from '../../common/addProgress/addProgress';

export default function AddJobForm(props) {
  return (
    <form className="row" id="add-job-form">
      <fieldset className="col-12">
        <div className="col-6">
          <JobDetailEntry
            name={props.title}
            placeholder={props.titlePlaceholder}
          />
        </div>
        <div className="col-6">
          <JobDetailEntry
            name={props.company}
            placeholder={props.companyPlaceholder}
          />
        </div>

        <div className="col-6">
          <JobDetailEntry
            name={props.location}
            placeholder={props.locationPlaceholder}
          />
        </div>

        <div className="col-6">
          <DateInput />
        </div>


        <div className="col-12">
          <div className="col-6">
            <SkillEntry />
          </div>
          <div className="col-6">
            <ExperienceLevel />
          </div>
        </div>

        <div className="col-12">
          <AddProgress />
        </div>

      </fieldset>
      <div className="col-4">
        <SaveButton />
      </div>
      <div className="col-4">
        <AddButton />
      </div>
      <div className="col-4">
        <ResetButton />
      </div>
    </form>
  );
}

AddJobForm.defaultProps = {
  title: 'Job Title',
  titlePlaceholder: 'Front-end web developer',
  company: 'Company',
  companyPlaceholder: 'Amazon',
  location: 'Location',
  locationPlaceholder: 'Seattle, WA',
}
