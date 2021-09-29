import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import PathFindingVisualizer from "./components/PathFindingVisualizer/PathFindingVisualizer";

import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/sorting">
            <SortingVisualizer />
          </Route>
          <Route path="/pathfinding">
            <PathFindingVisualizer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
