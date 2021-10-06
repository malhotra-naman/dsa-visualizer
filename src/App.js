import React from "react";
import "./App.css";
import PathFindingVisualizer from "./components/PathFindingVisualizer/PathFindingVisualizer";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import HomePage from "./Pages/Home/Home";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <SortingVisualizer /> */}
      {/* <PathFindingVisualizer /> */}
    </div>
  );
}

export default App;
