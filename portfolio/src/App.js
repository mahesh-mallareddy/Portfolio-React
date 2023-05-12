import Navbar from "./components/Navbar";
import React from "react";
import Homeintro from "./components/Home";
import Skills from "./components/skills";

function App() {
  return (
    <div >
      <Navbar />
      <Homeintro/>
      <Skills />
    </div>
  );
}

export default App;
