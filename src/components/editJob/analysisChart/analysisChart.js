import React from 'react';

import {
  Radar, RadarChart, PolarGrid, Legend,
  ResponsiveContainer, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const fullMark = 20;

const data = [
    { subject: 'HTML5', A: 1, B: 2, fullMark: fullMark },
    { subject: 'CSS3', A: 1, B: 2, fullMark: fullMark },
    { subject: 'JavaScript', A: 1, B: 1, fullMark: fullMark },
    { subject: 'React', A: 0.5, B: 1, fullMark: fullMark },
    { subject: 'Angular', A: 0, B: 1, fullMark: fullMark },
];

export default function CompareSkillChart(props) {
  return (
    <div className="col-12 chart-container">
      <h4>Skill Chart</h4>
      <p>(years of experience)</p>
      <ResponsiveContainer aspect={2}>
       <RadarChart data={data}>
        <Radar name="current skills" dataKey="A" stroke="#3AB7FF" fill="#3AB7FF" fillOpacity={0.4}/>
        <Radar name="required skills" dataKey="B" stroke="#FFD256" fill="#FFD256" fillOpacity={0.4}/>
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis/>
       </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
