import React from 'react';
import { Link } from 'react-router-dom';
import {
  Radar, RadarChart, PolarGrid,
  ResponsiveContainer, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

import './skillChart.css';

const fullMark = 20;

const data = [
    { subject: 'HTML5', A: 1, fullMark: fullMark },
    { subject: 'CSS3', A: 1, fullMark: fullMark },
    { subject: 'JavaScript', A: 1, fullMark: fullMark },
    { subject: 'React', A: 0.5, fullMark: fullMark },
    { subject: 'Angular', A: 0, fullMark: fullMark },
];

export default function SkillChart(props) {
  return (
    <div className="row">
      <div className="col-12 chart-container">
        <h3>Skill Chart</h3>
        <ResponsiveContainer aspect={2}>
  	     <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis/>
            <Radar name="Mike" dataKey="A" stroke="#FFD256" fill="#FFD256" fillOpacity={0.5}/>
          </RadarChart>
        </ResponsiveContainer>
        <p>(experience in years)</p>
      </div>
        <div className="col-12 edit-container">
          <Link to="/profile">
            Edit Profile...
          </Link>
        </div>
    </div>
  );
}
