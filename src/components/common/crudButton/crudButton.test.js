import React from 'react';

import { shallow } from 'enzyme';

import CrudButton from './crudButton';

describe('<CrudButton />', () => {
  it('Renders without crashing', () => {
    shallow(<CrudButton />);
  });
});
