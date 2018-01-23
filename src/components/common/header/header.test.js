import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Renders the headerId', () => {
    const headerId = "1";
    const h1Id="1";
    const h1Text="foo";
    const h2Text=<h2>bar</h2>;
    const wrapper = shallow(
      <Header
        headerId={headerId}
        h1Id={h1Id}
        h1Text={h1Text}
        h2Text={h2Text}
      />);
    expect(wrapper.contains(
      <header id={headerId}>
        <h1 id={h1Id}>{h1Text}</h1>
        {h2Text}
      </header>)).toEqual(true);
  });
});
