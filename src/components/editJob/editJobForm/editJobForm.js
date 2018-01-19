import React from 'react';

import './editJobForm.css';

import JobDetailEntry from '../../common/jobDetailEntry/jobDetailEntry';
import DateInput from '../../common/dateInput/dateInput';
import ResetButton from '../../common/resetButton/resetButton';
import SaveButton from '../../common/saveButton/saveButton';
import AddProgress from '../../common/addProgress/addProgress';
import SkillEntry from '../../common/skillEntry/skillEntry';
import ExperienceLevel from '../../common/experienceLevel/experienceLevel';

export default class EditJobForm extends React.Component {
  render() {
    let skills = [];
    let experiences = [];
      skills = this.props.skills.map((skill, index) =>
        <SkillEntry skill={skill} key={index} />
      )
      experiences = this.props.experiences.map((experience, index) =>
        <ExperienceLevel months={experience.months} years={experience.years} key={index} />
      )

    return (
      <form className="row" id="edit-job-form">
        <fieldset>
          <div className="col-6">
            <JobDetailEntry
              name={this.props.title}
              placeholder={this.props.titlePlaceholder}
            />
          </div>
          <div className="col-6">
            <JobDetailEntry
              name={this.props.company}
              placeholder={this.props.companyPlaceholder}
            />
          </div>

          <div className="col-6">
            <JobDetailEntry
              name={this.props.location}
              placeholder={this.props.locationPlaceholder}
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
          <div className="col-4 cancel-button-container">
            <button
              type="button"
              className="cancel-button"
              onClick={this.props.handleClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
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
