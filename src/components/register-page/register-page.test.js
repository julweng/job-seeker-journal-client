import React from 'react';
import { shallow } from 'enzyme';

import RegisterPage from './register-page';

describe('<RegisterPage />', () => {
  it('Renders without crashing', () => {
    shallow(<RegisterPage />);
  });
});
