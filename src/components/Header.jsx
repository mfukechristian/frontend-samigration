// components/Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/Samigration.png";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header>
      <img
        src={logo}
        alt="logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      />
    </header>
  );
}

export default Header;
