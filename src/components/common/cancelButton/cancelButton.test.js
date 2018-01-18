import React from 'react';

import { shallow } from 'enzyme';
import CancelButton from './cancelButton';

describe('<CancelButton />', () => {
  it('Renders without crashing', () => {
    shallow(<CancelButton />);
  });
});
