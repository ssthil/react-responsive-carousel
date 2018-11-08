import React, { Component } from "react";
import ReactDOM from "react-dom";
/** local component */
import "./style.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        {
          "imgUrl": "https://cdn.pixabay.com/user/2018/01/12/08-06-25-409_250x250.jpg"
        },
        {
          "imgUrl": "https://cdn.pixabay.com/user/2015/12/01/20-20-44-483_250x250.jpg"
        },
        {
          "imgUrl": "https://cdn.pixabay.com/user/2016/09/22/02-22-02-467_250x250.jpg"
        }
      ]
    }
  }
  render() {
    return (
      <div className="main-container">
        <h1 className="header">React Responsive Carousel</h1>
        <ul>
          {
            this.state.data.map((user, i) => {
              return (
                <li key={i} >
                  <img src={user.imgUrl} alt={i} width={250} />
                </li>
              )
              // console.log(user)
            })
          }
        </ul>
      </div>
    );
  }
};

const SelectorRef = document.getElementById("app");

ReactDOM.render(<App />, SelectorRef);
