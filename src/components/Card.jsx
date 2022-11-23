import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="poke-container">
      <div className={classes.card}>
        <div className="img-container">
          {" "}
          <img src={props.image} alt="PokeImage" />
        </div>
        <div className="info">
          <span>pokemonID</span>
          <h3 className="name">
            {props.name[0].toUpperCase() + props.name.slice(1)}
          </h3>
          <Link to={`${props.name}`}>See more</Link>
        </div>
      </div>
    </div>
  );
}
