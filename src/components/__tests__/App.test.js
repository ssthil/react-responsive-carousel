import React, { Component } from "react";
import { shallow, mount, render } from '../../enzyme';
import fetch from 'isomorphic-fetch';

import App from '../App';
/** local component */
import "../../styles/index.css";
import "../../styles/index.scss";

import Carousel from "../Carousel";
import Arrows from "../Arrows";

describe('App component', () => {
  test('should shallow correctly', () => {
    expect(shallow(
      <App />
    )).toMatchSnapshot()
  })
  it('test render h1', () => {
    expect(render(<App />).find('.main-container > h1').text()).toBe('React Responsive Carousel'); // NG
  });
})


describe('Carousel component', () => {
  test('should shallow correctly', () => {
    expect(shallow(
      <Carousel />
    )).toMatchSnapshot()
  })
  test('should mount correctly', () => {
    expect(mount(
      <Carousel />
    )).toMatchSnapshot()
  })
})

describe('Arrows component', () => {
  test('should shallow correctly', () => {
    expect(shallow(
      <Arrows />
    )).toMatchSnapshot()
  })
  test('should mount correctly', () => {
    expect(mount(
      <Arrows />
    )).toMatchSnapshot()
  })
})