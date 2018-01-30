import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSkills } from '../../../actions/users';
import {
  openAddSkillForm,
  closeAddSkillForm,
} from '../../../actions/handler';

import './currentSkill.css';
import AddSkillForm from '../addSkillForm/addSkillForm';
import EditSkillForm from '../editSkillForm/editSkillForm';
import CrudButton from '../../common/crudButton/crudButton';
import SkillData from '../skillData/skillData';

export class CurrentSkill extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount() {
    const user_id = localStorage.getItem('userId');
    this.props.getSkills(user_id);
  }

  handleAddClick() {
    this.props.openAddSkillForm(this.props.addSkill)
  }

  showForm(addSkill, editSkill) {
    if(addSkill) {
      return <AddSkillForm />
    } else if (editSkill) {
      return <EditSkillForm />
    }
  }

  noSkill(skills) {
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
    return false;
  }

  render() {
    const { skills, addSkill, editSkill } = this.props;
    console.log(skills)
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
        {this.noSkill(skills)}
        <SkillData />
      </div>
      <div className="row">
        <div className="col-4">
          <CrudButton
            type={`button`}
            text={`+Skill`}
            className={`add-button`} handleAddClick={this.handleAddClick}
          />
        </div>
        <div className="col-4">
          <CrudButton
            type={`submit`}
            text={`Submit`}
            className={`save-button`}
          />
        </div>
        <div className="col-4">
          <Link to="/dashboard">
            <CrudButton
              type={`button`}
              text={`Cancel`}
              className={`cancel-button`}
            />
          </Link>
        </div>
      </div>
        {this.showForm(addSkill, editSkill)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addSkill: state.handlers.addSkill,
    editSkill: state.handlers.editSkill,
    skills: state.users.skills,
    hasError: state.users.itemHasErrored,
    isLoading: state.users.itemIsLoading
  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    openAddSkillForm: openAddSkillForm,
    closeAddSkillForm: closeAddSkillForm,
    getSkills: user_id => getSkills(user_id)
  }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(CurrentSkill);

CurrentSkill.defaultProps = {
  addSkill: false,
  editSkill: false,
  skills: []
}
