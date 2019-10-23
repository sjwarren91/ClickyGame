import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="card" style={{backgroundImage: 'url(' + props.image + ')'}}>
                
        </div>
    );
}

export default Card
