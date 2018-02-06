import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeEditSkillForm } from '../../../actions/handler';
import Input from '../../common/input/input';
import { Field, reduxForm, focus } from 'redux-form';
import CrudButton from '../../common/crudButton/crudButton';
import { required, number, minValue } from '../../../validators';
import { getSkillFilterById, putSkill } from '../../../actions/users';

const minValueZero = minValue(0);

export class EditSkillForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancelClick = this.handleCancelClick.bind(this);
}

  handleCancelClick() {
    this.props.closeEditSkillForm(this.props.editSkill);
  }

  onSubmit(values) {
    this.props.closeEditSkillForm(this.props.addSkill);
    const { skill, experience } = values;
    this.props.dispatch(putSkill(skill, experience));
  }

  render () {
    const skillName = `Skill: ${this.props.skill.skill}`;
    const skillExperience = `Experience: ${this.props.skill.experience} year(s)`;

    if(!this.props.editSkill) {
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
          <h3>Edit Skills</h3>
        </div>
          <div className="col-12">
            <fieldset>
              <div className="col-6">
              <label htmlFor="skills">{skillName}</label>
              <Field
                component={Input}
                type="text"
                name="skill"
                id="skill"
                defaultValue={`${this.props.skill.skill}`}
                validate={[required]}
              />
              </div>
              <div className="col-6 experience-container">
              <label htmlFor="experience">{skillExperience}</label>
              <Field
                component={Input}
                type="number"
                name="experience"
                id="experience"

                validate={[required, number, minValueZero]}
              />
              </div>
            </fieldset>
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

const mapStateToProps = (state) => ({
  editSkill: state.handlers.editSkill,
  skills: state.users.skills,
  error: state.users.err,
  skill: state.users.skill,
  skill_id: state.users.skill_id,
  initialValues: state.users.skill,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getSkillFilterById: getSkillFilterById,
    closeEditSkillForm: closeEditSkillForm,
    putSkill: putSkill
  }, dispatch));

EditSkillForm = connect(mapStateToProps, mapDispatchToProps)(EditSkillForm);

EditSkillForm = reduxForm({
  form: 'skillEntry',
  enableReinitialize: true,
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('skillEntry', Object.keys(errors)[0]))
})(EditSkillForm);

EditSkillForm = connect(
  state => ({
    initialValues: state.users.skill
  }),
)(EditSkillForm)

export default EditSkillForm
