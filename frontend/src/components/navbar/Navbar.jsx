import React, { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

function Navbar() {
  const [size, setSize] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      // console.log(window.innerWidth);
      if (window.innerWidth >= 600) {
        setSize(true);
      } else {
        setSize(false);
      }
    });
    if (window.innerWidth >= 600) {
      setSize(true);
    } else {
      setSize(false);
    }
  }, [window.innerWidth]);

  return (
    <div className="navbar">{size ? <NavbarDesktop /> : <NavbarMobile />}</div>
  );
}

export default Navbar;
