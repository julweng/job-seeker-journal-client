import React from 'react';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid,
        Tooltip, Legend} from 'recharts';

import './progressBarChart.css';

const data = [
      {period: 'Jan-Mar', phone: 2, 'on-site': 0, offer: 0, applied: 10},
      {period: 'Apr-Jun', phone: 5, 'on-site': 2, offer: 0, applied: 16},
      {period: 'Jul-Sept', phone: 6, 'on-site': 3, offer: 2, applied: 21},
      {period: 'Oct-Dec', phone: 0, 'on-site': 0, offer: 0, applied: 0},
      {period: '12 mo', phone: 13, 'on-site': 5, offer: 2, applied: 47}
];

export default function ProgressBarChart(props) {
  return (
    <div className="row">
      <div className="col-12" id="container">
        <h3>Progress Summary</h3>
    	 <BarChart width={600} height={300} data={data}
            margin={{top: 4, right: 30, left: 30, bottom: 4}}>
          <XAxis dataKey="period"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="phone" fill="#8884d8" />
          <Bar dataKey="on-site" fill="#82ca9d" />
          <Bar dataKey="offer" fill="#FFD256" />
          <Bar dataKey="applied" fill="#BD9391" />
        </BarChart>
      </div>
      <div id="edit-container">
        <a
          href="#job-collection"
          aria-label="job collection"
          id="edit-job-collection"
          onClick={() => props.onJobCollection()}
          >
          Edit Job Collection...
        </a>
      </div>
    </div>
    );
  }
