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
    maxScore: 9,
    message: "Welcome! Click a Rick to start!"
  };

  clickHandler = id => {
    const newRicks = this.state.ricks.map(rick => {
      if (rick.id === id && !rick.clicked) {
        this.handleCorrect();
        return { ...rick, clicked: true };
      } else if (rick.id === id) {
        this.handleIncorrect();
        return rick;
      } else {
        return rick;
      }
    });

    this.setState({
      ricks: newRicks
    });
  };

  handleCorrect = () => {
    this.setState({ tracker: true });

    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.score + 1 });
    }

    if (this.state.score + 1 >= this.state.maxScore) {
      const newRicks = this.state.ricks.map(rick => {
        return { ...rick, clicked: false };
      });
  
      this.setState({
        ricks: newRicks,
        score: this.state.score + 1,
        message: "Congrats, you clicked all the Ricks!"
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        message: "Correct!"
      });
    }
  };

  handleIncorrect = () => {
    const newRicks = this.state.ricks.map(rick => {
      return { ...rick, clicked: false };
    });

    this.setState({
      ricks: newRicks,
      message: "Incorrect! Remember to only click each Rick once!",
      score: 0
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Content />
        <TransitionGroup>
          <CSSTransition appear={true} timeout={6000} classNames={"container"}>
            <div className="state-container">
              <div className="state">
                Score: {this.state.score} || Top Score: {this.state.topScore}
              </div>
              <div className="message">{this.state.message}</div>
            </div>
          </CSSTransition>
          <CSSTransition appear={true} timeout={6000} classNames={"container"}>
            <div className="card-container">
              {this.state.ricks.map(rick => (
                <Card key={rick.id} {...rick} clickHandler={this.clickHandler} />
              ))}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
