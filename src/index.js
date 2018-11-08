import React, { Component } from "react";
import ReactDOM from "react-dom";
/** local component */
import "./style.css";

/** config */
const API_URL = "https://pixabay.com/api/";
const API_KEY = "9656065-a4094594c34f9ac14c7fc4c39";

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      marginLeft: 0,
      marginRight: 0
    }
  }
  /** lifecycle would be started after page rendered */
  componentDidMount() {
    fetch(`${API_URL}?key=${API_KEY}&q=beautiful+landscape&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.hits
        })
      })
  }
  /** prev button click event */
  prevButtonClick = () => {
    this.setState({
      marginLeft: this.state.marginLeft - 265
    })
  }
  /** next button click event */
  nextButtonClick = () => {
    this.setState({
      marginLeft: this.state.marginLeft + 265
    })
  }

  render() {
    /** prev button rotate */
    const prevRotate = 180;
    const prevArrow = {
      transform: `rotate(${prevRotate}deg)`
    }

    return (
      <div className="main-container">
        <h1 className="header">React Responsive Carousel</h1>
        <div className="carousel-container" style={{marginLeft: this.state.marginLeft}}>
          {
            this.state.data.map((user, i) => {
              return (
                (user.largeImageURL !== "") &&
                <div className="image-holder" key={i}>
                  <span>
                    <img src={user.largeImageURL} alt={user.user} width={250} height={200} />
                    <span className="user-name">{user.user}</span>
                  </span>
                </div>
              )
            })
          }
        </div>
        <div className="button-section">
          <img src={"./src/resource/arrow.svg"} onClick={this.prevButtonClick} alt="prev" style={prevArrow} />
          <img src={"./src/resource/arrow.svg"} onClick={this.nextButtonClick} alt="next" />
        </div>
      </div>
    );
  }
};

const SelectorRef = document.getElementById("app");

ReactDOM.render(<App />, SelectorRef);
