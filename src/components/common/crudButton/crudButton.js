import React from 'react';

import './crudButton.css'

export default function CrudButton(props) {
  return (
    <div className="col-12 big-button-container">
      <button
        type={props.type}
        className={props.className}
        onClick={props.handleCancelClick || props.handleAddClick || props.handleEditClick}
      >
        {props.text}
      </button>
    </div>
  );
}

CrudButton.defaultProps = {
  className: '',
  handleCancelClick: undefined,
  handleAddClick: undefined,
  handleEditClick: undefined,
  text: '',
  type: ''
}
