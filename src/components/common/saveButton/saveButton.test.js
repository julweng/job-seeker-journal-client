import React from 'react';

import { shallow } from 'enzyme';

import SaveButton from './saveButton';

describe('<SaveButton />', () => {
  it('Renders without crashing', () => {
    shallow(<SaveButton />);
  });
});
