import React from "react";
import "./App.css";
import PathFindingVisualizer from "./components/PathFindingVisualizer/PathFindingVisualizer";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import HomePage from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      {/* <SortingVisualizer /> */}
      {/* <PathFindingVisualizer /> */}
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
