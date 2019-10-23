import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Card from "./components/Card";
import "./App.css";
import ricks from "./ricks.json";

class App extends Component {
  state = {
    ricks
  };
  render() {
    return (
      <div>
        <NavBar />
        <Content />
        <div className="card-container">
          {this.state.ricks.map(rick => (
            <Card {...rick} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
