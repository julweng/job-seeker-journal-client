import React from 'react';

import './addButton.css'

export default function AddButton(props) {
  return (
    <div className="col-12 add-button-container">
      <button
        type="button"
        className="add-button"
        onClick={() => this.setEditing(true)}
      >
        +Skills
      </button>
    </div>
  );
}
