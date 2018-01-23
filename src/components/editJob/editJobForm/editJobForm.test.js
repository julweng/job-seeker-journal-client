import React from 'react';

import { shallow } from 'enzyme';
import { EditJobForm } from './editJobForm';

describe('<EditJobForm />', () => {
  it('Renders without crashing', () => {
    shallow(<EditJobForm />);
  });
});
