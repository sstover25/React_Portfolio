import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  return (
    <header className="d-flex flex-row">
      <a href="/" className="main-title">
        <h1>Shannon Stover</h1>
      </a>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
