import React from 'react';

import { shallow } from 'enzyme';
import { AddSkillForm } from './addSkillForm';

describe('<AddSkillForm />', () => {
  it('Renders without crashing', () => {
    shallow(<AddSkillForm />);
  });
});
