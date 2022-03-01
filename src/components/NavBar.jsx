import React from "react";
import { renderNavBarBrand, renderNavBarItems } from "./common/NavBarCommon";

const NavBar = () => {
  const navBarItems = [
    { path: "home", label: "Home" },
    { path: "about", label: "About" },
    { path: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        {renderNavBarBrand("SouthMoonStudio")}
        {renderNavBarItems(navBarItems)}
      </div>
    </nav>
  );
};

export default NavBar;
