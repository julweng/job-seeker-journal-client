import React from 'react';

import SkillEntry from '../skillEntry/skillEntry';
import ExperienceLevel from '../experienceLevel/experienceLevel';

export default function EditSkillEntry(props) {
  return (
    <div className="col-12">
      <SkillEntry skill={props.skill} />
      <ExperienceLevel months={props.experiences.months} years= {props.experiences.years} />
    </div>
  )
}

EditSkillEntry.defaultProps = {
  skill: 'HTML',
  experiences: {
      months: 0,
      years: 1
  },
}
