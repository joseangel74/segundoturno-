import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/dashboard">
        <li>Dashboard</li>
      </NavLink>
      <NavLink to="/about">
        <li>About</li>
      </NavLink>
    </>
  );
}

export default Header;