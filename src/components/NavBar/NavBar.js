import React from "react";
import logo from "../../assets/img/Capture.PNG";
import SearchBar from "./SearchBar/index";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="main">
      <div className="logo-section">
        <img className="logo-img" src={logo} alt=""></img>
      </div>
      <div className="section1">
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
