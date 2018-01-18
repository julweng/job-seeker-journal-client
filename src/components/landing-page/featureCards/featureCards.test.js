import React from 'react';
import { shallow } from 'enzyme';

import FeatureCards from './featureCards';

describe('<FeatureCards />', () => {
  it('Renders without crashing', () => {
    shallow(<FeatureCards />);
  });
});
