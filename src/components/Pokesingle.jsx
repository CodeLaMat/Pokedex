import React, { Component } from "react";

export default class Pokesingle extends Component {
  state = {
    data: [],
    isloading: false,
  };

  componentDidMount() {
    this.setState({ isloading: true });
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data, isloading: false });
      });
  }
  render() {
    if (this.state.isloading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h2>{this.state.data.name}</h2>
        <img
          src={this.state.data.sprites?.other.dream_world.fron_default}
          alt={this.state.data.name}
        ></img>
      </div>
    );
  }
}
