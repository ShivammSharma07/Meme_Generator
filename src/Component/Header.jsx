import React from "react";
import images from "../images/troll.png";

export default function Header() {
  return (
    <header className="header">
      <img src={images} alt="" className="header-img" />
      <h2 className="header-title">Meme Generator</h2>
    </header>
  );
}
