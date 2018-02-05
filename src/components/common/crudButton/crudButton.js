import React from 'react';
import './crudButton.css';

export default function CrudButton(props) {
  return (
    <div className="col-12 big-button-container">
      <button
        id={props.id}
        type={props.type}
        className={props.className}
        onClick={props.handleCancelClick || props.handleAddClick || props.handleEditClick || props.handleDeleteClick}
      >
        {props.text}
      </button>
    </div>
  );
}
