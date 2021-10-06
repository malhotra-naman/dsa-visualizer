import React from "react";
import "./App.css";
import PathFindingVisualizer from "./components/PathFindingVisualizer/PathFindingVisualizer";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import Lecture from "./Pages/Home2/Home";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Lecture />
      {/* <SortingVisualizer /> */}
      {/* <PathFindingVisualizer /> */}
    </div>
  );
}

export default App;
