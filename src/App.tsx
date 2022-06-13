import React from "react";
import "./App.css";
import Calculations from "./components/Calculations/Calculations";
import Intro from "./components/Intro/Intro";

const App = () => {
  return (
    <div className="App">
      <Intro/>
      <Calculations />
    </div>
  );
};

export default App;
