import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeEditSkillForm } from '../../../actions/handler';
import Input from '../../common/input/input';
import { Field, reduxForm, focus } from 'redux-form';
import CrudButton from '../../common/crudButton/crudButton';
import { required, number, minValue } from '../../../validators';
import { getSkillFilterById, putSkill } from '../../../actions/users';
import FontAwesome from 'react-fontawesome';

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
    const { editSkill, error, loading, handleSubmit, pristine, submitting } = this.props;
    if(error) {
      return <p>Sorry, the server is currently heavily involved in the battle for Azeroth.</p>
    }

    if(!editSkill) {
      return null;
    }

    if (loading) {
      return (
        <FontAwesome
        name='spinner'
        size='3x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
      )
    }

    return (
      <form
        className="row"
        id="add-skill-form"
        onSubmit={handleSubmit(values =>
          this.onSubmit(values)
      )}>
        <div className="col-12" id="form-title-container">
          <h3>Edit Skills</h3>
        </div>
          <div className="col-12">
            <fieldset>
              <div className="col-6">
              <label htmlFor="skills">{`Skill`}</label>
              <Field
                component={Input}
                type="text"
                name="skill"
                id="skill"
                validate={[required]}
              />
              </div>
              <div className="col-6 experience-container">
              <label htmlFor="experience">{`Experience`}</label>
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
              disabled={pristine || submitting}
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
  loading: state.users.loading
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
