import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openAddSkillForm, closeAddSkillForm } from '../../../actions/handler';
import './currentSkill.css';
import AddSkillForm from '../addSkillForm/addSkillForm';
import EditSkillForm from '../editSkillForm/editSkillForm';
import CrudButton from '../../common/crudButton/crudButton';
import SkillData from '../skillData/skillData';
import { getSkills } from '../../../actions/users';

export class CurrentSkill extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount() {
    this.props.getSkills();
  }

  handleAddClick() {
    this.props.openAddSkillForm(this.props.addSkill);
  }

  showAddSkill(addSkill) {
    if(addSkill) {
      return <AddSkillForm />
    }
    return <div></div>
  }

  showEditSkill(editSkill) {
    if(editSkill) {
      return <EditSkillForm />
    }
    return <div></div>
  }

  skillTable(skills) {
    if(!skills || skills.length === 0) {
      return (
        <div className="no-skill-container">
          <p className="col-4">skill</p>
          <p className="col-4">exp in year/months</p>
          <div className="col-2 grey">Edit</div>
          <div className="col-2 grey">Delete</div>
        </div>
      )
    }
    return (
      skills.map(skill =>
        <SkillData
          skill={skill.skill}
          experience={skill.experience}
          id={skill._id} key={`${skill.skill} ${skill.experience}`} />
    ))
  }

  render() {
    const { skills, addSkill, editSkill, error } = this.props;
    if(error) {
      return (
        <p>Sorry, something went horribly awry.</p>
      )
    }
    return (
      <div className="row current-skill-container">
      <div className="row">
        <h3>Current Skills</h3>
      </div>
      <div className="row">
        <div className="col-4">
          <p><strong>Skill</strong></p>
        </div>
        <div className="col-4">
          <p><strong>Experience Level</strong></p>
        </div>
        <div className="col-4">
          <p><strong>Actions</strong></p>
        </div>
      </div>
      <div className="row">
        {this.skillTable(skills)}
      </div>
      <div className="row">
        <div className="col-2">&nbsp;</div>
        <div className="col-4">
          <CrudButton
            type={`button`}
            text={`+Skill`}
            className={`add-button`} handleAddClick={this.handleAddClick}
          />
        </div>
        <div className="col-4">
          <Link to="/dashboard">
            <CrudButton
              type={`button`}
              text={`Dashboard`}
              className={`cancel-button`}
            />
          </Link>
        </div>
        <div className="col-2">&nbsp;</div>
      </div>
        {this.showAddSkill(addSkill)}
        {this.showEditSkill(editSkill)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addSkill: state.handlers.addSkill,
    editSkill: state.handlers.editSkill,
    skills: state.users.skills,
    error: state.users.err,
    currentUser: state.auth.currentUser,
  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    openAddSkillForm: openAddSkillForm,
    closeAddSkillForm: closeAddSkillForm,
    getSkills: getSkills,
  }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(CurrentSkill);
