import React, { Component } from "react";
import classes from "../components/Main.module.css";
import { Outlet } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <main className={classes.main}>
        <Outlet /> 
        {/* It is wehere we want to display the roots */}
          </main>
    );
  }
}
