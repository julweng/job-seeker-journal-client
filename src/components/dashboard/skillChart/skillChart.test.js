import React from 'react';

import { shallow } from 'enzyme';

import { SkillChart } from './skillChart';

describe('<SkillChart />', () => {
  it('Renders without crashing', () => {
    shallow(<SkillChart />);
  });
});
