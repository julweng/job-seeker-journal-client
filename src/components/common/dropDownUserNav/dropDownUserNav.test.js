import React from 'react';

import { shallow } from 'enzyme';
import DropDownUserNav from './dropDownUserNav';

describe('<DropDownUserNav />', () => {
  it('Renders without crashing', () => {
    shallow(<DropDownUserNav />);
  });
});
