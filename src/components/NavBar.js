import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./NavBar.css";

function NavBar({ message, score, topScore }) {
  return (
    <div className="header">
      <div className="container">
        <TransitionGroup>
          <CSSTransition appear={true} timeout={4000} classNames="title">
            <div>
              <img id="logo" src="./logo.png" alt="Logo" />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default NavBar;
