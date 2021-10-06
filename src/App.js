import React from "react";
import "./App.css";
import PathFindingVisualizer from "./components/PathFindingVisualizer/PathFindingVisualizer";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import HomePage from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/sorting">
          <SortingVisualizer />
        </Route>
        <Route exact path="/">
          <div className="App">
            <Header />
            <HomePage />
            {/* <SortingVisualizer /> */}
            {/* <PathFindingVisualizer /> */}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
