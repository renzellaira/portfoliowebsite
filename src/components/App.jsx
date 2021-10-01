import React from "react";
import Home from "./Home";
import Skills from "./Skills";
import Works from "./Works";
import ContactMe from "./ContactMe";

function App() {
  return (
    <div>
      <Home />
      <Skills className="skills"></Skills>
      <Works />
      <ContactMe />
    </div>
  );
}

export default App;
