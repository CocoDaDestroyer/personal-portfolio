import React from "react";
import '../CSS/Header.css'
function Header() {
  return (
    <div className="Header">
      <ul className="headingLinks">
        <li><a href = "#Home">Home</a></li>
        <li><a href = '#About'>About</a></li>
        <li><a href = '#Projects'>Projects</a></li>
        <li><a href = '#Contact'>Contact</a></li>

      </ul>

    </div>
  );
}

export default Header;
