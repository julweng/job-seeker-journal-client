import React from 'react';

import '../../addJob/addJobForm/addJobForm.css';

import JobDetailEntry from '../../common/jobDetailEntry/jobDetailEntry';
import DateInput from '../../common/dateInput/dateInput';
import AdditionalJobInfo from '../../common/additionalJobInfo/additionalJobInfo';
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
        <div className="col-6">
          {skills}
        </div>
        <div className="col-6">
          {experiences}
        </div>
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
