import React from 'react';

export default class SkillEntry extends React.Component {
  render() {
    return (
      <div className="col-12">
        <label htmlFor="skills">Skill</label>
        <input name="skill" value={this.props.skill} autoComplete="off" required />
      </div>
    );
  }    
}
