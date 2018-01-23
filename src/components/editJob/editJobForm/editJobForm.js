import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeEditJobForm } from '../../../actions/handler';

import './editJobForm.css';
import JobDetailEntry from '../../common/jobDetailEntry/jobDetailEntry';
import DateInput from '../../common/dateInput/dateInput';
import CrudButton from '../../common/crudButton/crudButton';
import AddProgress from '../../common/addProgress/addProgress';
import SkillEntry from '../../common/skillEntry/skillEntry';
import ExperienceLevel from '../../common/experienceLevel/experienceLevel';

export class EditJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleCancelClick() {
    this.props.closeEditJobForm(this.props.editJob)
    console.log(this.props.editJob)}

  jobSkillEntry(editJob, jobSkillCount, jobSkill) {
    if(editJob && jobSkillCount > 0) {
      for(let i = 0; i < jobSkillCount; i++) {
        jobSkill.push(
          <div className="col-12" key={i}>
            <div className="col-6">
              <SkillEntry />
            </div>
            <div className="col-6">
              <ExperienceLevel />
            </div>
          </div>
        )
      }
      return jobSkill;
    }
    return false;
  }

  render() {
    const { job, editJob, jobSkillCount } = this.props;


    const skills = job.skills.map((skill, index) =>
        <SkillEntry skill={skill} key={index} />);

    const experiences = job.experiences.map((experience, index) =>
        <ExperienceLevel months={experience.months} years={experience.years} key={index} />
      );

    const jobSkill = [];

    if(editJob && jobSkillCount >= 0) {
      return (
        <form className="row" id="edit-job-form">
          <fieldset>
            <div className="col-6">
              <JobDetailEntry
                placeholder={job.title}
              />
            </div>
            <div className="col-6">
              <JobDetailEntry
                placeholder={job.company}
              />
            </div>

            <div className="col-6">
              <JobDetailEntry
                placeholder={job.location}
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
              {this.jobSkillEntry(editJob, jobSkillCount, jobSkill)}
            </div>
            <div className="col-12">
              <AddProgress />
            </div>
          </fieldset>

          <div className="row">
            <div className="col-4">
            <CrudButton
              type={`submit`}
              text={`Save`}
              className={`save-button`}
            />
            </div>
            <div className="col-4">
              <CrudButton
                type={`button`}
                text={`Reset`}
                className={`reset-button`}
              />
            </div>
            <div className="col-4">
              <CrudButton
                type={`button`}
                text={`Cancel`}
                className={`cancel-button`}
                handleCancelClick={this.handleCancelClick}
              />
              </div>
          </div>
        </form>
      );
    }
    return false;
  }
}

const mapStateToProps = state => ({
  editJob: state.handlers.editJob,
  job: state.user.job,
  jobSkillCount: state.handlers.jobSkillCount
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    closeEditJobForm: closeEditJobForm
  }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(EditJobForm);

EditJobForm.defaultProps = {
  job: {
    title: '',
    company: '',
    location: '',
    dateApplied: '',
    skills: [],
    experiences: []
  }
}
