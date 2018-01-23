import React from 'react';

import './addJobForm.css';
import { connect } from 'react-redux';

import JobDetailEntry from '../../common/jobDetailEntry/jobDetailEntry';
import DateInput from '../../common/dateInput/dateInput';
import CrudButton from '../../common/crudButton/crudButton';
import SkillEntry from '../../common/skillEntry/skillEntry';
import ExperienceLevel from '../../common/experienceLevel/experienceLevel';
import AddProgress from '../../common/addProgress/addProgress';

export class AddJobForm extends React.Component {

  jobSkillEntry(jobSkillCount, jobSkill) {
    if(jobSkillCount > 0) {
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
    const jobSkill = [];
    const { jobFormLabel, jobSkillCount } = this.props;
    if(!jobFormLabel) {
      return false;
    }
      return (
        <form className="row" id="add-job-form">
          <fieldset className="col-12">
            <div className="col-6">
              <JobDetailEntry
                name={jobFormLabel.title}
                placeholder={jobFormLabel.title}
              />
            </div>
            <div className="col-6">
              <JobDetailEntry
                name={jobFormLabel.company}
                placeholder={jobFormLabel.company}
              />
            </div>

            <div className="col-6">
              <JobDetailEntry
                name={jobFormLabel.location}
                placeholder={jobFormLabel.location}
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

            {this.jobSkillEntry(jobSkillCount, jobSkill)}

            <div className="col-12">
              <AddProgress />
            </div>

          </fieldset>
          <div className="col-2">&nbsp;</div>
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
            className={`reset-button`}
            text={`Reset`}
          />
          </div>
          <div className="col-2">&nbsp;</div>
        </form>
    );
  }
}

const mapStateToProps = state => ({
  jobFormLabel: state.markup.jobFormLabel,
  jobSkillCount: state.handlers.jobSkillCount
});


export default connect(mapStateToProps)(AddJobForm);

AddJobForm.defaultProps = {
  title: 'Job Title',
  company: 'Company',
  location: 'Location'
}
