import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
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

  // sets the initial state to display the About Me section
  const [currentCategory, setCurrentCategory] = useState(0);

  return (
    <div className="main-body">
      <header className="d-flex flex-column flex-md-row justify-content-between">
        <Header></Header>
        <Navigation
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Navigation>
      </header>
      <main>
        {currentCategory === 0 && <About />}
        {currentCategory.name === "About Me" && <About />}
        {currentCategory.name === "Portfolio" && <Project />}
        {currentCategory.name === "Contact" && <Contact />}
        {currentCategory.name === "Resume" && <Resume />}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
