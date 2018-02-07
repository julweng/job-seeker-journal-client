import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from '../../common/input/input'
import DateInput from '../../common/dateInput/dateInput';
import { postJob } from '../../../actions/users';
import { bindActionCreators } from 'redux';
import { required } from '../../../validators';
import { toJobCollection } from '../../../actions/handler';
import CrudButton from  '../../common/crudButton/crudButton';
import './jobForm.css';

const progress = ['resume submitted', 'phone interview', 'on-site interview', 'offer received']

export class JobForm extends React.Component {

  onSubmit(values) {
    const { title, company, location, dateApplied, progress } = values;
    this.props.toJobCollection(true);
    return this.props.dispatch(postJob(title, company, location, dateApplied, progress));
  }

  saveSuccess(jobCollection) {
    if(jobCollection) {
      return (
        <div>
        <p className="succes-text">Your job entry has been saved</p>
        <p>Check it out in your job collection</p>
        </div>
      )
    }
    return false;
}

  render() {
    const { jobCollection, error, handleSubmit, pristine, submitting, reset } = this.props;

    if (error) {
      return <p>Sorry! Something went horribly wrong </p>
    }
    return (
      <div>
      <form className="row" id="add-job-form" onSubmit={handleSubmit(values =>
        this.onSubmit(values)
    )}>
    <fieldset className="col-12">
      <div className="col-12">
      <div className="col-6">
        <Field
          component={Input}
          type="text"
          name="title"
          id="title"
          label="Title"
          validate={[required]}
        />
      </div>
      <div className="col-6">
        <Field
          component={Input}
          type="text"
          name="company"
          id="company"
          label="Company"
          validate={[required]}
        />
      </div>
      </div>
      <div className="col-12">
      <div className="col-6">
        <Field
          component={Input}
          type="text"
          name="location"
          id="location"
          label="Location"
          validate={[required]}
        />
      </div>
      <div className="col-6">
        <Field
          component={DateInput}
          name="dateApplied"
          id="dateApplied"
          label="Date Applied"
          validate={[required]}
        />
      </div>
      </div>
      <div className="col-12">
        {
          progress.map(progressOption => (
            <div className="col-3 progress-container" key={progressOption}>
            <label>{progressOption}</label>
              <Field
                name="progress"
                component="input"
                type="radio"
                value={`${progressOption}`}
                validate={[required]}
              />
            </div>
          ))
        }
        </div>
          </fieldset>
          <div className="col-2">&nbsp;</div>
          <div className="col-4">
            <CrudButton
              type={`submit`}
              className={`save-button`}
              text={`Save`}
              disabled={pristine || submitting}
            />
          </div>
          <div className="col-4">
          <div className="col-12 big-button-container">
            <button type="click" className="reset-button" disabled={pristine || submitting} onClick={reset}
            >
              Reset
            </button>
          </div>
          </div>
          <div className="col-2">&nbsp;</div>
        </form>
        {this.saveSuccess(jobCollection)}
      </div>
    )
  }
}

JobForm = reduxForm({
  form: 'addJobForm',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('addJobForm', Object.keys(errors)[0]))
})(JobForm)

const mapStateToProps = state => ({
  jobs: state.users.jobs,
  error: state.users.error,
  jobCollection: state.handlers.jobCollection
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    postJob: postJob,
    toJobCollection: toJobCollection
  }, dispatch));

JobForm = connect(mapStateToProps, mapDispatchToProps)(JobForm);

export default JobForm
