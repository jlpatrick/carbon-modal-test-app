import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModalComponent from './ModalComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('ModalComponent', () => {

  test('renders ', () => {

    // create and validate the wrapper
    const wrapper = mount(<ModalComponent open={true} onRequestClose={jest.fn()} onRequestSubmit={jest.fn()} />);
    expect(wrapper.exists()).toBe(true);

    expect(wrapper.find('Modal').length).toEqual(1);

		expect(wrapper.find('button').length).toEqual(3);

  });

});

