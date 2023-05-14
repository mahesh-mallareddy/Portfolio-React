import Navbar from "./components/Navbar";
import React from "react";
import Homeintro from "./components/Home";
import Skills from "./components/skills";
import Project from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div >
      <Navbar />
      <Homeintro/>
      <Skills />
      <Project/>
      <Contact />
    </div>
  );
}

export default App;
