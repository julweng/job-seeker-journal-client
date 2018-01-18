import React from 'react';

import { shallow } from 'enzyme';

import CurrentSkill from './currentSkill';

describe('<CurrentSkill />', () => {
  it('Renders without crashing', () => {
    shallow(<CurrentSkill />);
  });
});
