import React from 'react';

import './editJobForm.css';

import JobDetailEntry from '../../common/jobDetailEntry/jobDetailEntry';
import DateInput from '../../common/dateInput/dateInput';
import CancelButton from '../../common/cancelButton/cancelButton';
import ResetButton from '../../common/resetButton/resetButton';
import SaveButton from '../../common/saveButton/saveButton';
import AddProgress from '../../common/addProgress/addProgress';
import SkillEntry from '../../common/skillEntry/skillEntry';
import ExperienceLevel from '../../common/experienceLevel/experienceLevel';

export default function EditJobForm(props) {
  let skills = [];
  let experiences = [];
  if(props) {
    skills = props.skills.map((skill, index) =>
      <SkillEntry skill={skill} key={index} />
    )
    experiences = props.experiences.map((experience, index) =>
      <ExperienceLevel months={experience.months} years={experience.years} key={index} />
    )
  }

  return (
    <form className="row" id="edit-job-form">
      <fieldset>
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
            {skills}
          </div>
          <div className="col-6">
            {experiences}
          </div>
        </div>

        <div className="col-12">
          <AddProgress />
        </div>

      </fieldset>

      <div className="row">
        <div className="col-4">
          <SaveButton />
        </div>
        <div className="col-4">
          <ResetButton />
        </div>
        <div className="col-4">
          <CancelButton />
        </div>
      </div>
    </form>
  );
}

EditJobForm.defaultProps = {
  title: 'Job Title',
  titlePlaceholder: 'Front-end web developer',
  company: 'Company',
  companyPlaceholder: 'Amazon',
  location: 'Location',
  locationPlaceholder: 'Seattle, WA',
  contact: 'Contact',
  contactPlaceholder: 'Mary Anderson',
  contactEmail: 'Email',
  contactEmailPlaceholder: 'manderson@amazon.com',
  referrer: 'Referrer',
  referrerPlaceholder: 'Alice Smith',
  referrerEmail: 'Email',
  referrerEmailPlaceholder: 'asmith@gmail.com',
  skills: ['HTML5', 'CSS3'],
  experiences: [
    {
      months: 1,
      years: 1
    },
    {
      months: 2,
      years: 1
    }
  ]
}
