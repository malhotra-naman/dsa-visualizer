import React from "react";
import "./App.css";
import PathFindingVisualizer from "./components/PathFindingVisualizer/PathFindingVisualizer";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import HomePage from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/MainContainer";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/merge_sort" component={Main} />
          <Route exact path="/quick_sort" component={Main} />
          <Route exact path="/heap_sort" component={Main} />
          <Route exact path="/bubble_sort" component={Main} />
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
