import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openEditSkillForm } from '../../../actions/handler';
import CrudButton from '../../common/crudButton/crudButton';
import './skillData.css';

export class SkillData extends React.Component {
  constructor(props){
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick() { this.props.openEditSkillForm(this.props.editSkill) }

  render() {
    return (
      this.props.skills.map((skill, index) => (
        <div className="col-12 individual-skill-container" data-id={skill.id} key={index}>
          <p className="col-4">{skill.skill}</p>
          <p className="col-4">{skill.experience.years} years {skill.experience.months} months</p>
          <div className="col-2">
            <CrudButton
              type={`button`}
              className={`edit-skill-button`}
              text={`Edit`}
              handleEditClick={this.handleEditClick}
            />
          </div>
          <div className="col-2">
            <CrudButton
              type={`button`}
              className={`delete-skill-button`}
              text={`Delete`}
            />
          </div>
        </div>
      ))
    )
  }
}

const mapStateToProps = state => ({
  editSkill: state.handlers.editSkill,
  skills: state.markup.skills
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    openEditSkillForm: openEditSkillForm
  }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(SkillData);

SkillData.defaultProps = {
  editSkill: false,
  skills: []
}
