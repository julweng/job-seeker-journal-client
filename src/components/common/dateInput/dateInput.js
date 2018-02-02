import React from 'react';

export default class DateInput extends React.Component {
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
      <div className="col-12 form-input">
        <label htmlFor={this.props.input.name}>{this.props.label}</label>
        <input
        {...this.props.input}
        type="date"
        id={this.props.input.name}
        min="2018-01-01" max="2018-12-31"
        ref={input => (this.input = input)} required />
        {error}
        {warning}
      </div>
    );
  }
}
