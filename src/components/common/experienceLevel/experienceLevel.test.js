import React from 'react';

import { shallow } from 'enzyme';

import ExperienceLevel from './experienceLevel';

describe('<ExperienceLevel />', () => {
  it('Renders without crashing', () => {
    shallow(<ExperienceLevel />);
  });
});
