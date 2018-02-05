import React from 'react';

import { shallow } from 'enzyme';
import { DropDownTopNav } from './dropDownTopNav';

describe('<DropDownTopNav />', () => {
  const seedLinks = [];
  beforeAll(() => {
    for(let i = 0; i < 10; i++) {
      seedLinks.push(`<li key=${i}><a href="#"></a><li>`)
    }
  })

  it('Renders without crashing', () => {
    shallow(<DropDownTopNav />);
  });

  it('Rends the link and text', () => {
    const link = '/foo';
    const text = 'bar';
    const wrapper = shallow(
      <dropDownTopNav
        link={link}
        text={text}
      />);
      expect(wrapper.contains(
        <li>
          <a href={link}>{text}</a>
        </li>
      ))
    });
  });
