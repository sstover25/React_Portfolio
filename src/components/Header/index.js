import React, { useState } from "react";
import Navigation from "../Navigation";

function Header(props) {
  const [categories] = useState([
    {
      name: "About Me",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <header className="d-flex flex-row">
      <a href="/" className="main-title">
        <h1>Shannon Stover</h1>
      </a>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Navigation>
    </header>
  );
}

export default Header;
