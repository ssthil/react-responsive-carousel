import React, { Component } from "react";
/** local component */
import "../styles/index.css";
import "../styles/index.scss";

import Carousel from "./Carousel";
import Arrows from "./Arrows";
/** config */
import config from "../config.js"
/** utils */
// import { sliderPosition } from "../utils.js";

var imageDistance_bigDevice = 15 || imageDistance_bigDevice;
var imageDistance_smallDevice = 5 || imageDistance_smallDevice;
var sliderDistance;

if (screen.width === 320) {
   sliderDistance = 350 + imageDistance_smallDevice
} else if (screen.width === 375) {
   sliderDistance = 370 + imageDistance_smallDevice
} else if (screen.width === 568 || screen.width === 667 || screen.width === 812) {
    sliderDistance = 650 + imageDistance_smallDevice
} else {
  sliderDistance = 206 + imageDistance_bigDevice
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      marginLeft: 0,
      marginRight: 0
    }

    // this.sliderPosition().bind(this)
  }
  /** lifecycle would be started after page rendered */
  componentDidMount() {
    fetch(`${config.API_URL}?key=${config.API_KEY}&q=beautiful+landscape&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.hits
        })
      })

    this.setState({
      marginLeft: this.state.marginLeft
    })
  }

  /** */
  // sliderPosition(imageDistance_bigDevice, imageDistance_smallDevice, sliderDistance) {

  // }
  /** prev button click event */
  prevButtonClick = () => {
    // setTimeout(() => {
      this.setState({
        marginLeft: this.state.marginLeft - sliderDistance
      })
    // }, 1000);
  }
  /** next button click event */
  nextButtonClick = () => {
    this.setState({
      marginLeft: this.state.marginLeft + sliderDistance
    })
  }

  render() {
    console.log(this.state.data.length)
    return (
      <div className="main-container">
        <h1 className="header">React Responsive Carousel</h1>
        <div className="carousel-container" style={{ marginLeft: this.state.marginLeft }}>
          {
            this.state.data.map((user, i) => {
              return (
                (user.largeImageURL !== "") &&
                <Carousel
                  imgUrl={user.largeImageURL}
                  alt={user.user}
                  userName={user.user}
                  key={i}
                />
              )
            })
          }
        </div>
        <Arrows
          prevClick={this.prevButtonClick}
          nextClick={this.nextButtonClick}
        />
      </div>
    );
  }
};

export default App;
