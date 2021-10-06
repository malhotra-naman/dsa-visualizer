import React from "react";
import "./Home.css";
import Carousel from "react-elastic-carousel";

const HomePage = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div className="homePage">
      <div className="searchsort">
        <span className="head">Searching &amp; Sorting</span>
        <hr />
        <Carousel breakPoints={breakPoints}>
          <div className="card">
            <span>Linear Search</span>
          </div>
          <div className="card">
            <span>Binary Search</span>
          </div>
          <div className="card">
            <span>Merge Sort</span>
          </div>
          <div className="card">
            <span>Quick Sort</span>
          </div>
          <div className="card">
            <span>Heap Sort</span>
          </div>
        </Carousel>
      </div>
      <div className="pathfinding">
        <span className="head">Pathfinding Algorithms</span>
        <hr />
        <Carousel breakPoints={breakPoints}>
          <div className="card">
            <span>A*</span>
          </div>
          <div className="card">
            <span>Djkistra</span>
          </div>
          <div className="card">
            <span>Algo3</span>
          </div>
          <div className="card">
            <span>Algo4</span>
          </div>
          <div className="card">
            <span>Algo5</span>
          </div>
        </Carousel>
      </div>
      <div className="trees">
        <span className="head">Trees</span>
        <hr />
        <Carousel breakPoints={breakPoints}>
          <div className="card">Binary Tree</div>
          <div className="card">Binary Search Tree</div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
