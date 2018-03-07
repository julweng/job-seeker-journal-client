import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Renders the header props', () => {
    const headerId = "1";
    const h1Id = "1";
    const h1Text = "foo";
    const h2Text = <h2>bar</h2>;
    const component = <p>hi</p>;
    const wrapper = shallow(
      <Header
        headerId={headerId}
        h1Id={h1Id}
        h1Text={h1Text}
        h2Text={h2Text}
        component={component}
      />);

    expect(wrapper.contains(
      <header id={headerId}>
        <h1 id={h1Id}>{h1Text}</h1>
        {h2Text}
        <div className="row">
          <div className="col-4">&nbsp;</div>
          <div className="col-4">
            <a href="/register" id="register-header-button">Begin Tracking</a>
          </div>
          <div className="col-4">&nbsp;</div>
        </div>
        <div>{component}></div>
      </header>));
  });
});
