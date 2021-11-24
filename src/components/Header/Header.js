import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./Header.css";

const Header = ({ isHome = true, header = "Data Structures Visualizer" }) => {
  const history = useHistory();
  const [heading, setHeading] = useState("");
  useEffect(() => {
    switch (header) {
      case "/merge_sort":
        setHeading("Merge Sort");
        break;
      case "/quick_sort":
        setHeading("Quick Sort");
        break;
      case "/heap_sort":
        setHeading("Heap Sort");
        break;
      case "/bubble_sort":
        setHeading("Bubble Sort");
        break;
      case "/astar":
        setHeading("A* Algorithm");
        break;
      case "/dijkstra":
        setHeading("Dijkstra Algorithm");
        break;
      case "/bfs":
        setHeading("BFS Algorithm");
        break;
      case "/dfs":
        setHeading("DFS Algorithm");
        break;
      default:
        setHeading("Data Structures Visualizer");
        break;
    }
  }, []);
  const homeHeader = (
    <div className="main">
      <span className="title">{heading}</span>
    </div>
  );
  const generalHeader = (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span
        className="title sub-title"
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </span>
      <span className="title">{heading}</span>
      <span
        className="title sub-title"
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </span>
    </div>
  );
  return isHome ? homeHeader : generalHeader;
};

export default Header;
