import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openEditSkillForm } from '../../../actions/handler';
import { deleteSkill, getSkillFilterById, setSkillId } from '../../../actions/users'
import CrudButton from '../../common/crudButton/crudButton';
import FontAwesome from 'react-fontawesome';
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
    this.props.getSkillFilterById();
  }

  handleDeleteClick(e) {
    const skill_id = e.target.getAttribute('id');
    this.props.deleteSkill(skill_id);
  }

  render() {
    const { error, loading, skill, experience, id } = this.props
    if(error) {
      return (
        <p>Sorry, something went wrong when retrieving skills</p>
      )
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

const mapStateToProps = state => ({
  editSkill: state.handlers.editSkill,
  skill_id: state.users.skill_id,
  error: state.users.err,
  loading: state.users.loading
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    openEditSkillForm: openEditSkillForm,
    deleteSkill: deleteSkill,
    getSkillFilterById: getSkillFilterById,
    setSkillId: setSkillId
  }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(SkillData);
