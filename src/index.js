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
      data: []
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

  render() {
    return (
      <div className="main-container">
        <h1 className="header">React Responsive Carousel</h1>
        <div className="carousel-container">
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
      </div>
    );
  }
};

const SelectorRef = document.getElementById("app");

ReactDOM.render(<App />, SelectorRef);
