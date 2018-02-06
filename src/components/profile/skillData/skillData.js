import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openEditSkillForm } from '../../../actions/handler';
import { deleteSkill, getSkillFilterById, setSkillId } from '../../../actions/users'
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
    this.props.setSkillId(skill_id);
    this.props.getSkillFilterById(skill_id);
  }

  handleDeleteClick(e) {
    const skill_id = e.target.getAttribute('id');
    this.props.deleteSkill(skill_id);
  }

  render() {
    const { err, skill, experience, id } = this.props
    if(err) {
      return (
        <p>Sorry, something went wrong when retrieving skills</p>
      )
    } else {
      return (
        <div className="col-12 individual-skill-container">
          <p className="col-4">{skill}</p>
          <p className="col-4">{experience} year(s)</p>
          <div className="col-2">
            <CrudButton id={`${id}`}
              type={`button`}
              className={`edit-skill-button`}
              text={`Edit`}
              handleEditClick={this.handleEditClick}
            />
          </div>
          <div className="col-2">
            <CrudButton
              id={`${id}`}
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
}

const mapStateToProps = state => ({
  editSkill: state.handlers.editSkill,
  skill_id: state.users.skill_id,
  err: state.users.err,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    openEditSkillForm: openEditSkillForm,
    deleteSkill: deleteSkill,
    getSkillFilterById: getSkillFilterById,
    setSkillId: setSkillId
  }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(SkillData);
