import React from 'react';

import './monthlyJobCollections.css';

export default function MonthlyJobCollections(props) {
  let jobTitleList = [];
  if(props.titles) {
    jobTitleList = props.titles.map((title, index) =>
      <li className="col-12 job-item" key={index}>
        <a
          href={`#${title}`} key={`${title}-${index}`}>
            &#9656;&nbsp;&nbsp;&nbsp;{title}
        </a>
      </li>
    )
  }

  const warning = <p>~*<a href="#add-edit-job">Add jobs</a> to your collection *~</p>;

  if(!props.titles || props.titles.length === 0) {
    return (
    <div className="row profile-warning-container">
      <div className="col-12">
        {warning}
      </div>
    </div>
    );
  }

  return (
    <div className="row">
      <div className="col-4 month-card-container">
        <h3>Jan</h3>
        <ul className="col-12 job-item-list">
          {jobTitleList}
        </ul>
      </div>
      <div className="col-4 month-card-container">
        <h3>Feb</h3>
        <ul className="col-12 job-item-list">
          {jobTitleList}
        </ul>
      </div>
      <div className="col-4 month-card-container">
        <h3>Mar</h3>
        <ul className="col-12 job-item-list">
          {jobTitleList}
        </ul>
      </div>
      <div className="col-4 month-card-container">
        <h3>Apr</h3>
        <ul className="col-12 job-item-list">
          {jobTitleList}
        </ul>
      </div>
      <div className="col-4 month-card-container">
        <h3>May</h3>
        <ul className="col-12 job-item-list">
          {jobTitleList}
        </ul>
      </div>
      <div className="col-4 month-card-container">
        <h3>Jun</h3>
        <ul className="col-12 job-item-list">
          {jobTitleList}
        </ul>
      </div>
      <div className="col-4 month-card-container">
        <h3>Jul</h3>
        <ul className="col-12 job-item-list">
          {jobTitleList}
        </ul>
      </div>
      <div className="col-4 month-card-container">
        <h3>Aug</h3>
        <ul className="col-12 job-item-list">
          {jobTitleList}
        </ul>
      </div>
      <div className="col-4 month-card-container">
        <h3>Sept</h3>
        <ul className="col-12 job-item-list">
          {jobTitleList}
        </ul>
      </div>
      <div className="col-4 month-card-container">
        <h3>Oct</h3>
        <ul className="col-12 job-item-list">
          {jobTitleList}
        </ul>
      </div>
      <div className="col-4 month-card-container">
        <h3>Nov</h3>
        <ul className="col-12 job-item-list">
          {jobTitleList}
        </ul>
      </div>
      <div className="col-4 month-card-container">
        <h3>Dec</h3>
        <ul className="col-12 job-item-list">
          {jobTitleList}
        </ul>
      </div>
    </div>
  );
}
