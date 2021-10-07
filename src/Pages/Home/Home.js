import React from "react";
import "./Home.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Particles from "react-particles-js";

import Carousel from "react-elastic-carousel";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const history = useHistory();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <>
      <Header />
      <div className="homePage">
        <Particles
          params={{
            polygon: {
              enable: true,
              type: "inside",
              move: {
                radius: 1,
              },
            },
          }}
          id="particles-js"
        />
        <div className="container">
          <span className="head">Searching &amp; Sorting</span>
          <hr />
          <Carousel breakPoints={breakPoints} className="carousel-container">
            <div className="card one">
              <span>Linear Search</span>
            </div>
            <div className="card two">
              <span>Binary Search</span>
            </div>
            <div
              className="card three"
              onClick={() => {
                history.push("/sorting");
              }}
            >
              <span>Merge Sort</span>
            </div>

            <div className="card one">
              <span>Quick Sort</span>
            </div>
            <div className="card two">
              <span>Heap Sort</span>
            </div>
          </Carousel>
        </div>
        <div className="container">
          <span className="head">Pathfinding Algorithms</span>
          <hr />
          <Carousel breakPoints={breakPoints} className="carousel-container">
            <div className="card three">
              <span>A*</span>
            </div>
            <div className="card one">
              <span>Djkistra</span>
            </div>
            <div className="card two">
              <span>DFS</span>
            </div>
            <div className="card one">
              <span>BFS</span>
            </div>
            <div className="card three">
              <span>Bellman-Ford</span>
            </div>
          </Carousel>
        </div>
        <div className="container">
          <span className="head">Trees</span>
          <hr />
          <Carousel breakPoints={breakPoints} className="carousel-container">
            <div className="card one">
              <span>Binary Tree</span>
            </div>
            <div className="card three">
              <span>Binary Search Tree</span>
            </div>
            <div className="card two">
              <span>N-Ary Tree</span>
            </div>
            <div className="card three">
              <span>Graphs</span>
            </div>
            <div className="card one">
              <span>Heaps</span>
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
