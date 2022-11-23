import React from "react";
import classes from "../components/Header.module.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={classes.header}>
      <Link to="/">
        <h1>PokeApp</h1>
      </Link>
      <Nav />
    </header>
  );
}
