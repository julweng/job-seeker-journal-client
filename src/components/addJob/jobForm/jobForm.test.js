import React from 'react';

import { shallow } from 'enzyme';
import { JobForm } from './jobForm';

describe('<JobForm />', () => {
  it('Renders without crashing', () => {
    shallow(<JobForm />);
  });
});
