import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

function Navigation({ isAuth }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">SocialTest</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {
              routes.map(({ to, text, auth, name }) => isAuth === auth && (
                <li className="nav-item" key={name}>
                  <NavLink className="nav-link" to={to} activeClassName="active">{text}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;