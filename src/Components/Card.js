import React from "react";
import "./Card.css";



function Card(props) {
  return (
    <>

      <div className="card">
         
        <div className="card-img">
          <img
            src= {props.src}
            alt="my img"
          />
        </div>
        <div className="card-info">
          <h1>Animal</h1>
          <h4>{props.sname} </h4>
          <a href= {props.link}>
            <button>More</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
