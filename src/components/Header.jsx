import React from "react";
import "../styles/Header.css";
import logo from "../assets/Samigration.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;
