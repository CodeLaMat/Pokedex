import { Link, NavLink } from "react-router-dom";
import classes from "../components/Nav.module.css";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pokelist">PokeList</NavLink>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
