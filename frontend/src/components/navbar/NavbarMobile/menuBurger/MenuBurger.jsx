import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuBurger() {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  function handleBurgerClick() {
    setIsBurgerClicked(!isBurgerClicked);
  }

  return (
    <div className="menu-burger">
      <button
        type="button"
        className={isBurgerClicked ? "burger active" : "burger inactive"}
        onClick={() => {
          // e.stopPropagation();
          handleBurgerClick();
        }}
      >
        <div className="bar bar1" />
        <div className="bar bar2" />
        <div className="bar bar3" />
      </button>

      <div
        className={
          isBurgerClicked ? "links-container opened" : "links-container closed"
        }
      >
        <NavLink className="navbar-mobile-admin" to="/admin">
          <button
            className="btn-navbar btn-artists"
            type="button"
            onClick={() => handleBurgerClick()}
          >
            Admin <br /> database
          </button>
        </NavLink>
        <NavLink to="/artists">
          <button
            className="btn-navbar btn-artists"
            type="button"
            onClick={() => handleBurgerClick()}
          >
            Artists
          </button>
        </NavLink>
        <NavLink to="/albums">
          <button
            className="btn-navbar btn-albums"
            type="button"
            onClick={() => handleBurgerClick()}
          >
            Albums
          </button>
        </NavLink>
        <NavLink to="/tracks">
          <button
            className="btn-navbar btn-albums"
            type="button"
            onClick={() => handleBurgerClick()}
          >
            Tracks
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default MenuBurger;
