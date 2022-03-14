import React from "react";
import Logo from "../images/globe.png";

const Navbar = () => {
  return (
    <header className="header">
        <img src={Logo} alt="travel journal logo" className="nav--logo"/>
        <h3 className="nav--title">my TravelJournal</h3>
    </header>
  )
}

export default Navbar