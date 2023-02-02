import React from "react";
import { NavLink } from "react-router-dom";
import logoLongWhite from "../../../assets/images/CP-4-white.png";

function NavbarDesktop() {
  return (
    <div className="navbar-desktop">
      <NavLink className="logo-desktop-container" to="/">
        <img className="logo-desktop" src={logoLongWhite} alt="logo" />
      </NavLink>
      <NavLink className="navbar-admin" to="/admin">
        <button className="btn-navbar btn-artists" type="button">
          Admin <br /> database
        </button>
      </NavLink>
      <div className="nav-links-desktop-container">
        <NavLink to="/artists">
          <button className="btn-navbar btn-artists" type="button">
            Artists
          </button>
        </NavLink>
        <NavLink to="/albums">
          <button className="btn-navbar btn-albums" type="button">
            Albums
          </button>
        </NavLink>
        <NavLink to="/tracks">
          <button className="btn-navbar btn-albums" type="button">
            Tracks
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default NavbarDesktop;
