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

const jobDetail = {
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

export default function AddJobForm(props) {
  return (
    <form className="row">
      <fieldset className="col-12">
        <JobDetailEntry name={jobDetail.title} placeholder={jobDetail.titlePlaceholder} />
        <JobDetailEntry name={jobDetail.company} placeholder={jobDetail.companyPlaceholder} />
        <JobDetailEntry name={jobDetail.location} placeholder={jobDetail.locationPlaceholder} />
        <AdditionalJobInfo name={jobDetail.contact} placeholder={jobDetail.contactPlaceholder} />
        <AdditionalJobInfo name={jobDetail.contactEmail} placeholder={jobDetail.contactEmailPlaceholder} />
        <DateInput />
        <AdditionalJobInfo name={jobDetail.referrer} placeholder={jobDetail.referrerPlaceholder} />
        <AdditionalJobInfo name={jobDetail.referrerEmail} placeholder={jobDetail.referrerEmailPlaceholder} />
        <SkillEntry />
        <ExperienceLevel />
      </fieldset>
        <SaveButton />
        <AddButton />
        <ResetButton />
    </form>
  );
}
