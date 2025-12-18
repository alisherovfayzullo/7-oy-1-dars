import React, { useContext } from "react";
import { contextProvider } from "../context/MainContext";

function Navbar() {
  const { state } = useContext(contextProvider);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "#1a1a1a",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
    zIndex: 1000,
  };

  return (
    <div style={navbarStyle}>
      <span>AFX</span>
    </div>
  );
}

export default Navbar;
