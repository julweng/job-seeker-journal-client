import React from 'react';

export default function DateInput(props) {
  return (
    <div className="col-6">
      <label htmlFor="date-submitted">Date applied:</label>
      <input type="date" name="date-submitted" min="2017-01-01" required />
    </div>
  );
}
