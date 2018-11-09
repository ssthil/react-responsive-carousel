import React, { Component } from 'react';

const Arrow =  "./src/resource/arrow.svg";

class Arrows extends Component {
  render() {
    /** prev button rotate */
    const prevRotate = 180;
    const prevArrow = {
      transform: `rotate(${prevRotate}deg)`
    }
    /** props */
    const { prevClick, nextClick, prevStyle } = this.props;
    return (
      <div className="button-section">
        <img src={Arrow} onClick={prevClick} alt="prev" style={prevArrow} />
        <img src={Arrow} onClick={nextClick} alt="next" />
      </div>
    )
  }
}

export default Arrows;