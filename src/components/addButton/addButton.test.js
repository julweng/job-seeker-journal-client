import React from 'react';

import { shallow } from 'enzyme';

import AddButton from './addButton';

describe('<AddButton />', () => {
  it('Renders without crashing', () => {
    shallow(<AddButton />);
  });
});
