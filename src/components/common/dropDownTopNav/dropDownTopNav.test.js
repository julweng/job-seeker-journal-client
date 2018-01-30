import React from 'react';

import { shallow } from 'enzyme';
import { DropDownTopNav } from './dropDownTopNav';

describe('<DropDownTopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<DropDownTopNav />);
  });
});
