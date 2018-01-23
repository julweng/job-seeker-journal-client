import React from 'react';

import './addJobForm.css';

import JobDetailEntry from '../../common/jobDetailEntry/jobDetailEntry';
import DateInput from '../../common/dateInput/dateInput';
import CrudButton from '../../common/crudButton/crudButton';
import SkillEntry from '../../common/skillEntry/skillEntry';
import ExperienceLevel from '../../common/experienceLevel/experienceLevel';
import AddProgress from '../../common/addProgress/addProgress';

export default class AddJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addSkill: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      addSkill: this.state.addSkill + 1
    });
    console.log(this.state.addSkill)
  }

  showForm(addSkill) {
    let skillForm = [];
    for(let i = 0; i < addSkill; i++) {
      skillForm.push(
        <div className="col-12">
          <div className="col-6">
            <SkillEntry />
          </div>
          <div className="col-6">
            <ExperienceLevel />
          </div>
        </div>
      )
    }
    return skillForm
  }
/*
  handleClick() {
    this.setState({
      ...this.state,
      skills: [...this.state.skills, newSkill] //add empty array
    });
  }
*/
/* showForm() { return this.state.skills.map( (s, key) =>
    <SkillForm key={key} skill={s} updateSkill={this.updateSkill} />
    <div className="col-12">
      <div className="col-6">
        <SkillEntry />
      </div>
      <div className="col-6">
        <ExperienceLevel />
      </div>
    </div>
  }
*/
  render() {
    const addJobSkill = [];
    for(let i = 0; i < this.state.addSkill; i++) {
      addJobSkill.push(
        <div className="col-12" key={i}>
          <div className="col-6">
            <SkillEntry />
          </div>
          <div className="col-6">
            <ExperienceLevel />
          </div>
        </div>
      );
    }
      return (
        <form className="row" id="add-job-form">
          <fieldset className="col-12">
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
                <SkillEntry />
              </div>
              <div className="col-6">
                <ExperienceLevel />
              </div>
            </div>

            {addJobSkill}

            <div className="col-12">
              <AddProgress />
            </div>

          </fieldset>
          <div className="col-4">
            <CrudButton
              type={`submit`}
              className={`save-button`}
              text={`Save`}
            />
          </div>
          <div className="col-4">
            <CrudButton
              type={`click`}
              className={`add-button`}
              text={`+Skills`}
              handleClick={this.handleClick}
            />
          </div>
          <div className="col-4">
          <CrudButton
            type={`click`}
            className={`reset-button`}
            text={`Reset`}
          />
          </div>
        </form>
    );
  }
}

AddJobForm.defaultProps = {
  title: 'Job Title',
  titlePlaceholder: 'Front-end web developer',
  company: 'Company',
  companyPlaceholder: 'Amazon',
  location: 'Location',
  locationPlaceholder: 'Seattle, WA',
}
