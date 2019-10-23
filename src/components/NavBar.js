import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./NavBar.css";

function NavBar({ message, score, topScore }) {
    const [inProp, setInProp] = useState(false);

    return (
        <div className="header">
            <div className="container">
                <CSSTransition appear={true} timeout={200} classNames="title">
                    <div>Click and Morty</div>
                </CSSTransition>
                <div>Message</div>
                <div>Score</div>
            </div>
        </div>
    );
}

export default NavBar;
