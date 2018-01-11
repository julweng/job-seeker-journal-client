import React from 'react';

import {Radar, RadarChart, PolarGrid,
        PolarAngleAxis, PolarRadiusAxis} from 'recharts';

import './skillChart.css';

const fullMark = 5;

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
      <div className="col-12" id="container">
        <h3>Skill Chart</h3>
  	    <RadarChart cx={360} cy={200} outerRadius={150} width={700} height={400} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="A" stroke="#FFD256" fill="#FFD256" fillOpacity={0.5}/>
        </RadarChart>
      </div>
        <div id="edit-container">
          <a
            href="#profile" aria-label="profile" id="edit-skill"
            onClick={() => props.onProfile()}
          >
            Edit Profile...
          </a>
        </div>
    </div>
  );
}
