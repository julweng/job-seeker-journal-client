import React from 'react';

import { shallow } from 'enzyme';
import { AddJobForm } from './addJobForm';

describe('<AddJobForm />', () => {
  it('Renders without crashing', () => {
    shallow(<AddJobForm />);
  });
});
