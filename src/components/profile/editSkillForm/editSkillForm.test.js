import React from 'react';

import { shallow } from 'enzyme';
import { EditSkillForm } from './editSkillForm';

describe('<EditSkillForm />', () => {
  it('Renders without crashing', () => {
    shallow(<EditSkillForm />);
  });
});
