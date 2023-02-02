import React from "react";
import { NavLink } from "react-router-dom";
import logoLongWhite from "../../../assets/images/CP-4-white.png";
import MenuBurger from "./menuBurger/MenuBurger";

function NavbarMobile() {
  return (
    <div className="navbar-mobile">
      <NavLink className="logo-mobile-container" to="/">
        <img className="logo-mobile" src={logoLongWhite} alt="logo" />
      </NavLink>
      <MenuBurger />
    </div>
  );
}

export default NavbarMobile;
