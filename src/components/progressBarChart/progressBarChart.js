import React from 'react';
import { Link } from 'react-router-dom';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid,
        ResponsiveContainer, Tooltip, Legend} from 'recharts';

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
      <div className="col-12 chart-container">
        <h3>Progress Summary</h3>
        <ResponsiveContainer aspect={2}>
    	    <BarChart data={data}
            margin={{top: 3, right: 4, left: 4, bottom: 3}}>
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
        </ResponsiveContainer>
      </div>
      <div className="col-12 edit-container">
        <Link to="/job-collection">
          Edit Job Collection...
        </Link>
      </div>
    </div>
    );
  }
