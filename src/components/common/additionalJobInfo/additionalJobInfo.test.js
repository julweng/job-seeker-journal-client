import React from 'react';

import { shallow } from 'enzyme';

import AdditionalJobInfo from './additionalJobInfo';

describe('<AdditionalJobInfo />', () => {
  it('Renders without crashing', () => {
    shallow(<AdditionalJobInfo />);
  });
});
