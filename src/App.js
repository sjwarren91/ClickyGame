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
    message: "",
  };

  clickHandler = id => {
    const newRicks = this.state.ricks.map(rick => {
      if (rick.id === id && !rick.clicked) {
        this.handleCorrect();
        return {...rick, clicked: true};
      } else if (rick.id === id) {
        return rick;
        // handle incorrect click
      } else {
        return rick;
      }
    })

    this.setState({
      ricks: newRicks,
    })
    
  }

  handleCorrect = () => {
    this.setState({tracker: true})

    if (this.state.score + 1 > this.state.topScore) {
      this.setState({topScore: this.state.score + 1})
    }

    if (this.state.score + 1 >= this.state.maxScore) {
      this.setState({
        score: this.state.score + 1,
        message: "Congrats, you clicked all the Ricks!"
      })

    } else {
      this.setState({
        score: this.state.score + 1,
        message: "Correct!"
      })

    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Content />
        <div className="state">Score: {this.state.score} || Top Score: {this.state.topScore}</div>
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
