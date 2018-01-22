import React from 'react';
import { shallow } from 'enzyme';
import { TopNav } from './navigation-bar';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });
});
