import React from "react";
import "./Home.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Carousel from "react-elastic-carousel";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
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
            <div className="card three">
              <Link
                to="/sorting"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span>Merge Sort</span>
              </Link>
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
            <div className="card one">Binary Tree</div>
            <div className="card three">Binary Search Tree</div>
            <div className="card two">N-Ary Tree</div>
            <div className="card three">Graphs</div>
            <div className="card one">Heaps</div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
