import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openEditSkillForm } from '../../../actions/handler';
import { deleteSkill } from '../../../actions/users'
import CrudButton from '../../common/crudButton/crudButton';
import './skillData.css';

export class SkillData extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleEditClick(e) {
    this.props.openEditSkillForm(this.props.editSkill)
    const skill_id = e.target.getAttribute('id');
    localStorage.setItem('skillId', skill_id);
  }

  handleDeleteClick(e) {
    const skill_id = e.target.getAttribute('id');
    const user_id = localStorage.getItem('user_id');
    this.props.deleteSkill(user_id, skill_id);
  }

  render() {
    return (
        <div className="col-12 individual-skill-container">
          <p className="col-4">{this.props.skill}</p>
          <p className="col-4">{this.props.experience} year(s)</p>
          <div className="col-2">
            <CrudButton id={`${this.props.id}`}
              type={`button`}
              className={`edit-skill-button`}
              text={`Edit`}
              handleEditClick={this.handleEditClick}
            />
          </div>
          <div className="col-2">
            <CrudButton
              id={`${this.props.id}`}
              type={`button`}
              className={`delete-skill-button`}
              text={`Delete`}
              handleDeleteClick={this.handleDeleteClick}
            />
          </div>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  editSkill: state.handlers.editSkill
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    openEditSkillForm: openEditSkillForm,
    deleteSkill: deleteSkill
  }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(SkillData);
