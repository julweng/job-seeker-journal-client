import React from 'react';

export default class SkillEntry extends React.Component {
  componentDidUpdate(prevProps) {
      if (!prevProps.meta.active && this.props.meta.active) {
          this.input.focus();
      }
  }
  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
        error = <div className="form-error">{this.props.meta.error}</div>;
    }
    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
        warning = (
            <div className="form-warning">{this.props.meta.warning}</div>
        );
    }
    return (
      <div className="col-12">
        <label htmlFor="skills">Skill</label>
        <input name="skill" autoComplete="off" required />
      </div>
    );
  }
}
