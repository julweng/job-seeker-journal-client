import React from 'react';

export default function JobDetailEntry(props) {
  return (
    <div className="col-12">
      <label htmlFor={props.name}>{props.name}:</label>
      <input placeholder={props.name} autoComplete="off" required />
    </div>
  );
}

JobDetailEntry.defaultProps = {
  name: 'foo'
}
