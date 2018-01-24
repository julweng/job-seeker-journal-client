import React from 'react';

import { shallow } from 'enzyme';

import { SignUpContainer } from './signUp';

describe('<SignUpContainer />', () => {
  it('Renders without crashing', () => {
    shallow(<SignUpContainer />);
  });
});
