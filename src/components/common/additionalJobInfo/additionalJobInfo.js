import React from 'react';

export default function AdditionalJobInfo(props) {
  return (
    <div className="col-3">
      <label htmlFor={props.name}>{props.name}:</label>
      <input name={props.name} placeholder={props.placeholder} autoComplete="off" />
    </div>
  );
}

AdditionalJobInfo.defaultProps ={
  name: '',
  placeholder: ''
}
