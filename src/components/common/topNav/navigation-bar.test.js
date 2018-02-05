import React from 'react';
import { shallow } from 'enzyme';
import { TopNav } from './navigation-bar';

describe('<TopNav />', () => {
  const seedLinks = [];
  beforeAll(() => {
    for(let i = 0; i < 10; i++) {
      seedLinks.push(`<li key=${i}><a href="#"></a><li>`)
    }
  })

  it('Renders without crashing', () => {
    shallow(<TopNav />);
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

  it('Should call toggleOpen when hamburger is clicked', () => {
    const toggleOpen = jest.fn();
    const wrapper = shallow(<TopNav toggleOpen={toggleOpen} />);
    const link = wrapper.find('.toggle-open');
    link.simulate('click');
    expect(toggleOpen).toHaveBeenCalled();
    });
});
