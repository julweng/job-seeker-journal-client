import React from 'react';

import { shallow } from 'enzyme';
import AddProgress from './addProgress';

describe('<AddProgress />', () => {
  const seedProgress = [];
  beforeAll(() => {
    for(let i = 0; i < 10; i++) {
      seedProgress.push(`<div id=${i}></div>`)
    }
  });

  it('Renders without crashing', () => {
    shallow(<AddProgress />);
  });
});
