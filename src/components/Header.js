import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => (
  <header className="header">
    <h1 className="header__title"> Expensify </h1>
    <NavLink to="/" activeClassName="is-active" className="header__link" exact>
      {" "}
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active" className="header__link">
      {" "}
      Create
    </NavLink>
    <NavLink to="/help" activeClassName="is-active" className="header__link">
      {" "}
      Help
    </NavLink>
  </header>
);

export default Header;
