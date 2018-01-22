import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openAddSkillForm } from '../../../actions/handler';

import './currentSkill.css';
import AddSkillForm from '../addSkillForm/addSkillForm';
import EditSkillForm from '../editSkillForm/editSkillForm';
import CrudButton from '../../common/crudButton/crudButton';

export class CurrentSkill extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddSkillClick = this.handleAddSkillClick.bind(this);
  }

  handleAddSkillClick() {
    this.props.openAddSkillForm(this.props.addSkill)
  }

  showForm(addSkill) {
    if(addSkill) {
      return <AddSkillForm handleAddSkillClick={this.handleAddSkillClick} />;
    }
    return <EditSkillForm handleClick={this.handleClick} />;
  }

  render() {
    const warning = (
      <div className="col-12">
        <p>~* <a href="#profile">Add skills</a> to build your profile *~</p>
      </div>
    );

    const skillData = (
      this.props.skills.map((skill, index) => (
        <div className="col-12 individual-skill-container" data-id={skill.id} key={index}>
          <p className="col-4">{skill.skill}</p>
          <p className="col-4">{skill.experience.years} years {skill.experience.months} months</p>
          <div className="col-2">
            <CrudButton type={`button`} className={`edit-skill-button`} text={`Edit`} />
          </div>
          <div className="col-2">
            <CrudButton type={`button`} className={`delete-skill-button`} text={`Delete`} />
          </div>
        </div>
      ))
    );

    const addSKillForm = this.props.addSkill ? <AddSkillForm handleClick={this.handleAddSkillClick} /> : null

    if(!this.props.skills || this.props.skills.length === 0) {
      return (
        <div className="row profile-warning-container">{warning}</div>
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
          {skillData}
        </div>
        <div className="row">

          <div className="col-4">
            <CrudButton
              type={`button`}
              text={`+Skill`}
              className={`add-button`} handleAddSkillClick={this.handleAddSkillClick}
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
        {addSKillForm}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addSkill: state.handlers.addSkill,
  skills: state.markup.skills
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ openAddSkillForm: openAddSkillForm }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CurrentSkill);

CurrentSkill.defaultProps = {
  addSkill: false,
  skills: []
}
/*


  handleClick() {
    this.setState({
      editSkill: !this.state.editSkill
    });
  }

  showForm(editSkill) {
    if(editSkill) {
        return <EditSkillForm handleClick={this.handleClick} />;
    }
    return <AddSkillForm handleClick={this.handleClick} />;
  }

  render () {
    let skillData = [];
    if(this.props.skills) {
      skillData = this.props.skills.map((skill, index) => (
      <div className="col-12 individual-skill-container" data-id={skill.id} key={index}>
        <p key={`${skill.skill}${index}`} className="col-4">
          {skill.skill}
        </p>
        <p key={`${skill.experience.months}${skill.experience.months}${index}`} className="col-4">
          {skill.experience.years} years {skill.experience.months} months
        </p>
        <div className="col-2" key={`editButton-${index}`}>
          <button
            className="edit-skill-button"
            key={`edit-button${index}`}
            type="button"
            onClick={this.handleClick}
          >
            Edit
          </button>
        </div>
        <div className="col-2" key={`deleteButton-${index}`}>
          <button
            className="delete-skill-button"
            key={`delete-button${index}`}
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }

    const warning = <p>~* <a
      href="#profile">Add skills</a> to build your profile *~</p>;

    if(!this.props.skills || this.props.skills.length === 0) {
      return (
        <div className="row profile-warning-container">
          <div className="col-12">
            {warning}
          </div>
        </div>
      );
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
          {skillData}
        </div>
          {this.showForm(this.state.editSkill)}
        </div>
      );
    }
  }
*/
