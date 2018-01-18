import React from 'react';

import './addJobForm.css';

import JobDetailEntry from '../../common/jobDetailEntry/jobDetailEntry';
import DateInput from '../../common/dateInput/dateInput';
import AdditionalJobInfo from '../../common/additionalJobInfo/additionalJobInfo';
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
        <JobDetailEntry name={props.title} placeholder={props.titlePlaceholder} />
        <JobDetailEntry name={props.company} placeholder={props.companyPlaceholder} />
        <JobDetailEntry name={props.location} placeholder={props.locationPlaceholder} />
        <AdditionalJobInfo name={props.contact} placeholder={props.contactPlaceholder} />
        <AdditionalJobInfo name={props.contactEmail} placeholder={props.contactEmailPlaceholder} />
        <DateInput />
        <AdditionalJobInfo name={props.referrer} placeholder={props.referrerPlaceholder} />
        <AdditionalJobInfo name={props.referrerEmail} placeholder={props.referrerEmailPlaceholder} />
        <div className="col-6">
          <SkillEntry />
        </div>
        <div className="col-6">
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
