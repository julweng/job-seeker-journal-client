import React from 'react';

import { shallow } from 'enzyme';

import CrudButton from './crudButton';

describe('<CrudButton />', () => {
  it('Renders without crashing', () => {
    shallow(<CrudButton />);
  });

  it('Renders the id, type, className', () => {
  const id = '1';
  const type = 'text';
  const className = 'reset-button';
  const text = "hello";
  const wrapper = shallow(
    <CrudButton
      id={id}
      type={type}
      className={className}
      text={text} />);
  expect(wrapper.contains(
    <button
      id={id}
      type={type}
      className={className}
      >
      {text}
    </button>)).toEqual(true);
  });
  it('should call callback functions when button is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(
        <crudButton onClick={callback} />
    );
    wrapper.simulate('click');
    expect(callback).toHaveBeenCalled();
  })
});
