import React from 'react';

import { shallow } from 'enzyme';

import { SkillData } from './skillData';

describe('<SkillData />', () => {
  it('Renders without crashing', () => {
    shallow(<SkillData />);
  });
});
