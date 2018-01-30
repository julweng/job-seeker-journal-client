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

const user_id = localStorage.getItem('userId');

const minValueZero = minValue(0);

export class AddSkillForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleCancelClick() { this.props.closeAddSkillForm(this.props.addSkill) }

  onSubmit(values) {
    const { skill, experience } = values;
    return this.props
      .dispatch(postSkill(user_id, skill, experience))
  }

  render() {
    if(!this.props.addSkill) {
      return false;
    }
    return (
      <form
        className="row"
        id="add-skill-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
      )}>
      <div className="col-12" id="form-title-container">
        <h3>Add/Edit Skills</h3>
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
              validate={[required, number, minValueZero]}
            />
            </div>
          </fieldset>
          </div>
          <div className="row">
            <div className="col-4">
              <CrudButton
                type={`submit`}
                text={`Save`}
                className={`save-button`} />
            </div>
            <div className="col-4">
              <CrudButton
                type={`button`}
                text={`Cancel`}
                className={`cancel-button`}
                handleCancelClick={this.handleCancelClick}
              />
            </div>
            <div className="col-4">
              <CrudButton
                type={`button`}
                text={`Reset`}
                className={`reset-button`}
              />
            </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  addSkill: state.handlers.addSkill,
  skills: state.users.skills
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    closeAddSkillForm: closeAddSkillForm,
    postSkill: (user_id, skill, experience) => postSkill(user_id, skill, experience)
  }, dispatch));

AddSkillForm = connect(mapStateToProps, mapDispatchToProps)(AddSkillForm);

export default reduxForm({
  form: 'skillEntry',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('skillEntry', Object.keys(errors)[0]))
})(AddSkillForm);

AddSkillForm.defaultProps = {
  addSkill: true,
  skills: []
}
