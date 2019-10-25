import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Card from "./components/Card";
import "./App.css";
import ricks from "./ricks.json";

class App extends Component {
  state = {
    ricks: ricks,
    tracker: true,
    score: 0,
    topScore: 0,
    
  };

  clickHandler = id => {
    const newRicks = this.state.ricks.map(rick => {
      if (rick.id === id && !rick.clicked) {
        return {...rick, clicked: true};
      } else if (rick.id === id) {
        return rick;
        // handle incorrect click
      } else {
        return rick;
      }
    })

    this.setState({
      ricks: newRicks
    })
    console.log(this.state.ricks)
    console.log(newRicks);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Content />
        <TransitionGroup>
          <CSSTransition appear={true} timeout={7000} classNames={"container"}>
            <div className="card-container">
              {this.state.ricks.map(rick => (
                <Card key={rick.id} {...rick} clickHandler={this.clickHandler}/>
              ))}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
