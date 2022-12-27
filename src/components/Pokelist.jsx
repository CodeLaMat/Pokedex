import axios from "axios";
import React, { Component } from "react";
import classes from "../components/Pokelist.module.css";
import Card from "./Card";

class Pokelist extends Component {
  state = {
    data: [],
    isloading: false,
  };

  componentDidMount() {
    this.setState({ isloading: true });
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((p) => {
          return fetch(p.url).then((res) => res.json());
        });
        Promise.all(fetches).then((res) =>
          this.setState({ data: res, isloading: false })
        );
      });
  }

  render() {
    if (this.state.isloading) {
      return <p>Loading...</p>;
    }
    return (
      <div className={classes.cards}>
        {this.state.data.map((card) => (
          <Card
            name={card.name}
            key={card.name}
            image={card.sprites.other["official-artwork"].front_default}
          />
        ))}
      </div>
    );
  }
}

export default Pokelist;
