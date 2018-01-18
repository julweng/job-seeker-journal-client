import React from 'react';

import './saveButton.css'

export default function SaveButton(props) {
  return (
    <div className="col-4 save-button-container">
      <button type="button" className="save-button">Save</button>
    </div>
  );
}
