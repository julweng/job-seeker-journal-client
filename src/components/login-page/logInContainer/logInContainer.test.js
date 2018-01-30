import React from 'react';

import { shallow } from 'enzyme';

import { LogInContainer } from './logInContainer';

describe('<LogInContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<LogInContainer />);
  });
});
