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

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <header className="d-flex flex-row">
        <Header></Header>
        <Navigation
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Navigation>
      </header>
      <main>
        {currentCategory === "About Me" && <About />}
        {currentCategory === "Portfolio" && <Project />}
        {currentCategory === "Contact" && <Contact />}
        {currentCategory === "Resume" && <Resume />}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
