import React from 'react';

export default function EditProfileButtons(props) {
  return (
    <div className="col-12"
    <div className="col-6" key={`editButton-${index}`}>
      <button className="edit-button" key={`edit-button${index}`} type="button">Edit</button>
    </div>
    <div className="col-6" key={`deleteButton-${index}`}>
      <button className="delete-button" key={`delete-button${index}`} type="button">Delete</button>
    </div>
  );
}
