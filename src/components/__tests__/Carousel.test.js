import React from 'react';
import { shallow } from '../../enzyme';

import Carousel from "../Carousel";

describe("Carousel tests", () => {
  it("renders list of users image", () => {

    const userName = Array(20).fill(null);
    const wrapper = shallow(<Carousel userName={userName.user} />);

    console.log(wrapper.debug());
    // Expect the wrapper object to be defined
    expect(wrapper.debug()).toMatchSnapshot()
    expect(wrapper.find('.carousel-container')).toBeDefined();
    // expect(wrapper.find('.carousel-container')).toHaveLength(userName.length);
  })
})
