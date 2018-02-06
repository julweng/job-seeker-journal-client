import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeAddSkillForm } from '../../../actions/handler';
import './addSkillForm.css';
import Input from '../../common/input/input';
import { Field, reduxForm, focus } from 'redux-form';
import CrudButton from '../../common/crudButton/crudButton';
import { required, number, minValue } from '../../../validators';
import { postSkill } from '../../../actions/users';

const minValueZero = minValue(0);

export class AddSkillForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleCancelClick() { this.props.closeAddSkillForm(this.props.addSkill);
  }

  onSubmit(values) {
    this.props.closeAddSkillForm(this.props.addSkill);
    const { skill, experience } = values;
    return this.props
      .dispatch(postSkill(skill, experience))
  }

  render() {
    if(!this.props.addSkill) {
      return null;
    }
    return (
      <form
        className="row"
        id="add-skill-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
      )}>
      <div className="col-12" id="form-title-container">
        <h3>Add Skills</h3>
      </div>
        <div className="col-12">
          <fieldset>
            <div className="col-6">
              <label htmlFor="skills">Skill</label>
              <Field
                component={Input}
                type="text"
                name="skill"
                id="skill"
                placeholder="HTML"
                validate={[required]}
              />
            </div>
            <div className="col-6">
            <label htmlFor="experience">years</label>
            <Field
              component={Input}
              type="number"
              name="experience"
              id="experience"
              placeholder="0.5"
              validate={[required, number, minValueZero]}
            />
            </div>
          </fieldset>
          </div>
          <div className="row">
          <div className="col-2">&nbsp;</div>
            <div className="col-4">
              <CrudButton
                type={`submit`}
                text={`Save`}
                className={`save-button`}
                disabled={this.props.pristine || this.props.submitting}
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
            <div className="col-2">&nbsp;</div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    addSkill: state.handlers.addSkill,
    skills: state.users.skills,
    error: state.users.err
  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    closeAddSkillForm: closeAddSkillForm,
    postSkill: postSkill
  }, dispatch));

AddSkillForm = connect(mapStateToProps, mapDispatchToProps)(AddSkillForm);

export default reduxForm({
  form: 'skillEntry',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('skillEntry', Object.keys(errors)[0]))
})(AddSkillForm);
