import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeEditSkillForm } from '../../../actions/handler';
import SkillEntry from '../../common/skillEntry/skillEntry';
import ExperienceLevel from '../../common/experienceLevel/experienceLevel';
import CrudButton from '../../common/crudButton/crudButton';

export class EditSkillForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleCancelClick() { this.props.closeEditSkillForm(this.props.editSkill) }

  render () {
    if(!this.props.editSkill) {
      return false;
    }
    return (
      <form className="row" id="add-skill-form">
        <div className="col-12" id="form-title-container">
          <h3>Add/Edit Skills</h3>
        </div>
          <div className="col-12">
            <fieldset>
              <div className="col-6">
                <SkillEntry />
              </div>
              <div className="col-6 experience-container">
                <ExperienceLevel />
              </div>
            </fieldset>
            <div className="col-4">
              <CrudButton
                type={`button`}
                text={`Save`}
                className={`save-button`}
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
  editSkill: state.handlers.editSkill,
  skills: state.markup.skills
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    closeEditSkillForm: closeEditSkillForm
  }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(EditSkillForm);

EditSkillForm.defaultProps = {
  editSkill: true,
}
