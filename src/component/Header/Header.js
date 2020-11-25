import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand ">
        <h1 className={styles.logo}>Blog</h1>
      </Link>
      <ul className="navbar-nav ml-auto">
        <NavLink
          to="/"
          exact
          className="nav-link pr-5"
          activeStyle={{ color: "#606f5d" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/authors"
          className="nav-link pr-5"
          activeStyle={{ color: "#606f5d" }}
        >
          Autors
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link pr-5"
          activeStyle={{ color: "#606f5d" }}
        >
          About
        </NavLink>
      </ul>
    </nav>
  );
}
export default Header;
