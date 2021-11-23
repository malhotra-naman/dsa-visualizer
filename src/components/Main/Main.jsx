import React, { Component } from "react";
import Toolbar from "./Toolbar/ToolbarContainer.js";
import Body from "./Body/BodyContainer.js";
import "./Main.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.location.pathname);
  }

  render() {
    return (
      <div>
        <Header isHome={false} />
        <Toolbar pathname={this.props.location.pathname} />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Main;
