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
    maxScore: 12,
    message: "Welcome! Click Ricks to earn points, but only click each Rick once!"
  };

  animate = correct => {
    let message = document.getElementsByClassName("messageP")[0];

    if (correct) {
      message.classList.add("slide");
      setTimeout(this.unanimate, 1000);
    } else {
      message.classList.add("wiggle");
      setTimeout(this.unanimate, 820);

    }
  }

  unanimate = () => {
    let message = document.getElementsByClassName("messageP")[0];
    message.classList.remove("slide");
    message.classList.remove("wiggle");
  }

  clickHandler = id => {
    let track = false;
    const newRicks = this.state.ricks.map(rick => {
      if (rick.id === id && !rick.clicked) {
        track = true;
        this.animate(track);
        return { ...rick, clicked: true };
      } else if (rick.id === id) {
        track = false;
        this.animate(track);
        return rick;
      } else {
        return rick;
      }
    });

    if (!track) {
      this.handleIncorrect();
    } else {
      this.handleCorrect(newRicks);
    }
  };

  handleCorrect = ricks => {
    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.score + 1 });
    }

    if (this.state.score + 1 >= this.state.maxScore) {
      this.setState({
        score: this.state.score + 1,
        message: "Congrats, you clicked all the Ricks!"
      });
      setTimeout(this.reset("Click a Rick to play again!"), 1500)

    } else {
      const shuffled = this.shuffleRicks(ricks);
      this.setState({
        ricks: shuffled,
        score: this.state.score + 1,
        message: "Correct!"
      });
    }
  };

  handleIncorrect = () => {
    this.reset("Incorrect! Remember to only click each Rick once!")
    setTimeout(() => {
      this.setState({
        message: "Try again! Click each Rick once!"
      })
    }, 1500);
  };

  shuffleRicks = ricks => {
    for (let i = ricks.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [ricks[i], ricks[j]] = [ricks[j], ricks[i]];
    }
    return ricks;
  };

  reset = (message) => {
    const newRicks = this.state.ricks.map(rick => {
      return { ...rick, clicked: false };
    });

    this.setState({
      ricks: newRicks,
      message: message,
      score: 0,
      topScore: 0
    })
  }

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
              <div className="message">
                <p className="messageP">{this.state.message}</p>
              </div>
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
