import React from 'react';

import '../addJobForm/addJobForm.css';

import JobDetailEntry from '../jobDetailEntry/jobDetailEntry';
import DateInput from '../dateInput/dateInput';
import AdditionalJobInfo from '../additionalJobInfo/additionalJobInfo';
import CancelButton from '../cancelButton/cancelButton';
import ResetButton from '../resetButton/resetButton';
import SaveButton from '../saveButton/saveButton';
import AddProgress from '../addProgress/addProgress';
import EditSkillEntry from '../editSkillEntry/editSkillEntry';

export default function EditJobForm(props) {
  let skillExperiences = [];
  if(props) {
    skillExperiences = props.skillExperiences.map((item, index) =>
      <EditSkillEntry skill={item.skill} months={item.experiences.months} years={item.experiences.years} key={index} />
    )
  }

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
        {skillExperiences}
        <AddProgress />
      </fieldset>
        <SaveButton />
        <ResetButton />
        <CancelButton />
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
  skillExeperiences: [
    {
      skill: 'HTML',
      experiences: {
        months: 0,
        years: 1
      }
    },
    {
      skill: 'CSS',
      experiences: {
        months: 0,
        years: 1
      }
    }
  ]
}
