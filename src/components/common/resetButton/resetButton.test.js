import React from 'react';

import { shallow } from 'enzyme';

import ResetButton from './resetButton';

describe('<ResetButton />', () => {
  it('Renders without crashing', () => {
    shallow(<ResetButton />);
  });
});
