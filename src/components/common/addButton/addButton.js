import React from 'react';

import './addButton.css'

export default function AddButton(props) {
  return (
    <div className="col-4 add-button-container">
      <button type="button" className="add-button">+Skills</button>
    </div>
  );
}
