import React from 'react';

import './featureCards.css';

export default function FeatureCards(props) {
  return (
    <section className="row" id="about">
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className="col-4">
        <i className="fa fa-user fa-5x" aria-hidden="true"></i>
        <h3>Maintain Your Profile</h3>
        <p>Create and maintain a profile of your skill sets. Assess your potential of landing your dream jobs.</p>
      </div>
      <div className="col-4">
        <i className="fa fa-plus-circle fa-5x" aria-hidden="true"></i>
        <h3>Build Job Catalogue</h3>
        <p>Build a catalogue of jobs that you have applied. Record details about location, job title, etc.</p>
      </div>
      <div className="col-4">
        <i className="fa fa-pencil-square-o fa-5x" aria-hidden="true"></i>
        <h3>Edit Status</h3>
        <p>Keep track of your applications, update your progress, or organize jobs from the tracker.</p>
      </div>
    </section>
  );
}
