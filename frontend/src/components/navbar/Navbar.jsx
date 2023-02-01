import React from "react";
import { NavLink } from "react-router-dom";
import logoLongWhite from "../../assets/images/Checkpoint-4-white.png";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink className="logo-container" to="/">
        <img className="logo" src={logoLongWhite} alt="logo" />
      </NavLink>
      <div className="nav-links-container">
        <NavLink to="/artists">
          <button className="btn btn-artists" type="button">
            Artists
          </button>
        </NavLink>
        <NavLink to="/albums">
          <button className="btn btn-albums" type="button">
            Albums
          </button>
        </NavLink>
        <NavLink to="/tracks">
          <button className="btn btn-albums" type="button">
            Tracks
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
