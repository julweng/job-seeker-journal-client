import React from 'react';

import './addJobForm.css';

import JobDetailEntry from '../jobDetailEntry/jobDetailEntry';
import DateInput from '../dateInput/dateInput';
import AdditionalJobInfo from '../additionalJobInfo/additionalJobInfo';
import AddButton from '../addButton/addButton';
import ResetButton from '../resetButton/resetButton';
import SaveButton from '../saveButton/saveButton';
import SkillEntry from '../skillEntry/skillEntry';
import ExperienceLevel from '../experienceLevel/experienceLevel';
import AddProgress from '../addProgress/addProgress';

export default function AddJobForm(props) {
  return (
    <form className="row">
      <fieldset className="col-12">
        <JobDetailEntry name={props.title} placeholder={props.titlePlaceholder} />
        <JobDetailEntry name={props.company} placeholder={props.companyPlaceholder} />
        <JobDetailEntry name={props.location} placeholder={props.locationPlaceholder} />
        <AdditionalJobInfo name={props.contact} placeholder={props.contactPlaceholder} />
        <AdditionalJobInfo name={props.contactEmail} placeholder={props.contactEmailPlaceholder} />
        <DateInput />
        <AdditionalJobInfo name={props.referrer} placeholder={props.referrerPlaceholder} />
        <AdditionalJobInfo name={props.referrerEmail} placeholder={props.referrerEmailPlaceholder} />
        <div className="col-12">
          <SkillEntry />
        </div>
        <div className="col-12">
          <ExperienceLevel />
        </div>
        <AddProgress />
      </fieldset>
        <SaveButton />
        <AddButton />
        <ResetButton />
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
  contact: 'Contact',
  contactPlaceholder: 'Mary Anderson',
  contactEmail: 'Email',
  contactEmailPlaceholder: 'manderson@amazon.com',
  referrer: 'Referrer',
  referrerPlaceholder: 'Alice Smith',
  referrerEmail: 'Email',
  referrerEmailPlaceholder: 'asmith@gmail.com'
}
