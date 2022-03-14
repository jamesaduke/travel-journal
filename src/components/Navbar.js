import React from "react";
import Logo from "../images/globe.png";

const Navbar = () => {
  return (
    <nav className="nav">
        <img src={Logo} alt="travel journal logo" className="nav--logo"/>
        <h3 className="nav--title">my TravelJournal</h3>
    </nav>
  )
}

export default Navbar