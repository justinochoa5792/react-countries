import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-items">
          <NavLink className="nav-link" to={"/"}>
            <span className="nav-text">
              REST <span className="nav-text-highlight">Explorer</span>
            </span>
          </NavLink>
          <nav className="nav-menu">
            <NavLink className="nav-item" to={"/"}>
              Home
            </NavLink>
            <NavLink className="nav-item" to={"/countries"}>
              Countries
            </NavLink>
            <NavLink className="nav-item" to={"/about"}>
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
