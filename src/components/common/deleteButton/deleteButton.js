import React from 'react';

import './deleteButton.css'

export default function DeleteButton(props) {
  return (
    <div className="col-12 edit-button-container">
      <button type="button" className="delete-button">Delete</button>
    </div>
  );
}
