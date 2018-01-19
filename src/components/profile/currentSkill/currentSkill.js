import React from 'react';

import './currentSkill.css';
import AddSkillForm from '../addSkillForm/addSkillForm';
import EditSkillForm from '../editSkillForm/editSkillForm';

export default class CurrentSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editSkill: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      editSkill: !this.state.editSkill
    });
  }

  showForm(editSkill) {
    if(editSkill) {
        return <EditSkillForm handleClick={this.handleClick} />;
    }
    return <AddSkillForm />;
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
