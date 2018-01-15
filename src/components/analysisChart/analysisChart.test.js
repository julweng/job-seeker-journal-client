import React from 'react';

import { shallow } from 'enzyme';
import AnalysisChart from './analysisChart';

describe('<AnalysisChart />', () => {
  it('Renders without crashing', () => {
    shallow(<AnalysisChart />);
  });
});
