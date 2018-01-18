import React from 'react';

export default function JobDetailEntry(props) {
  return (
    <div className="col-6">
      <label htmlFor={props.name}>{props.name}:</label>
      <input name={props.name} placeholder={props.placeholder} autoComplete="off" required />
    </div>
  );
}

JobDetailEntry.defaultProps = {
  name: '',
  placeholder: ''
}
