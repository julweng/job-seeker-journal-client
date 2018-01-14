import React from 'react';

import './editButton.css'

export default function EditButton(props) {
  return (
    <div className="col-4 edit-button-container">
      <button type="button" className="edit-button">Edit</button>
    </div>
  );
}
