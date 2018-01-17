import React from 'react';

import { shallow } from 'enzyme';

import SkillEntry from './skillEntry';

describe('<SKillEntry />', () => {
  it('Render without crashing', () => {
    shallow(<SkillEntry />);
  });
});
