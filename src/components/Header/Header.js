import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "./Header.css";

const Header = ({ isHome = true }) => {
  const history = useHistory();
  const homeHeader = (
    <div className="main">
      <span className="title">Data Structures Visualizer</span>
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
      <span className="title">Data Structures Visualizer</span>
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
