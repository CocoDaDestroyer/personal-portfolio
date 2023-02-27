import React from "react";
import '../CSS/Header.css'
function Header() {
  return (
    <div className="Header">
        <button className="HeaderBtn">Home</button>
        <button className="HeaderBtn">About</button>
        <button className="HeaderBtn">Projects</button>
        <button className="HeaderBtn">Contact</button>
    </div>
  );
}

export default Header;
