import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Responsive Carousel</h1>
      </div>
    );
  }
};

const SelectorRef = document.getElementById("app");

ReactDOM.render(<App />, SelectorRef);
