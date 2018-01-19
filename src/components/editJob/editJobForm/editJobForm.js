import React from 'react';

import './editJobForm.css';

import JobDetailEntry from '../../common/jobDetailEntry/jobDetailEntry';
import DateInput from '../../common/dateInput/dateInput';
import ResetButton from '../../common/resetButton/resetButton';
import SaveButton from '../../common/saveButton/saveButton';
import AddProgress from '../../common/addProgress/addProgress';
import SkillEntry from '../../common/skillEntry/skillEntry';
import ExperienceLevel from '../../common/experienceLevel/experienceLevel';
import AddButton from '../../common/addButton/addButton';

export default class EditJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ],
      addSkill: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      addSkill: this.state.addSkill + 1
    });
    console.log(this.state.addSkill)
  }

  showForm(addSkill) {
    while(addSkill > 0) {
      return (
        <div className="col-12">
          <div className="col-6">
            <SkillEntry />
          </div>
          <div className="col-6">
            <ExperienceLevel />
          </div>
        </div>
    );
  }
}

  render() {
    let skills = [];
    let experiences = [];
      skills = this.state.skills.map((skill, index) =>
        <SkillEntry skill={skill} key={index} />
      )
      experiences = this.state.experiences.map((experience, index) =>
        <ExperienceLevel months={experience.months} years={experience.years} key={index} />
      )

    return (
      <form className="row" id="edit-job-form">
        <fieldset>
          <div className="col-6">
            <JobDetailEntry
              name={this.state.title}
              placeholder={this.state.titlePlaceholder}
            />
          </div>
          <div className="col-6">
            <JobDetailEntry
              name={this.state.company}
              placeholder={this.state.companyPlaceholder}
            />
          </div>

          <div className="col-6">
            <JobDetailEntry
              name={this.state.location}
              placeholder={this.state.locationPlaceholder}
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
            {this.showForm(this.state.addSkill)}
          <div className="col-12">
            <AddProgress />
          </div>

        </fieldset>

        <div className="row">
          <div className="col-3">
            <SaveButton />
          </div>
          <div className="col-3">
            <AddButton handleClick={this.handleClick} />
          </div>
          <div className="col-3">
            <ResetButton />
          </div>
          <div className="col-3 cancel-button-container">
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
