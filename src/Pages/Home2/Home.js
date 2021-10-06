import React, { useRef } from "react";
import "./Home.css";

export default function Lecture() {
  const data = {
    "Introduction to DSA": "/",
    Arrays: "/",
    Searching: "/",
    Sorting: "/",
    "Linked List": "/",
    Stack: "/",
    Queues: "/",
    Recursion: "/",
    Trees: "/",
    "Binary Tree": "/",
    "Binary Search Tree": "/",
    "Hash Map": "/",
    Heap: "/",
    "Priority Queues": "/",
    Graphs: "/",
    Tries: "/",
    DP: "/",
  };

  const courseCarousel = useRef(null);
  const handleScroll = (direction) => {
    if (direction === "left") {
      courseCarousel.current.scrollLeft -= 80;
    } else {
      courseCarousel.current.scrollLeft += 80;
    }
  };

  let rows = [];
  for (const i in data) {
    rows.push(
      <a
        href={data[i]}
        className="Lecture-Items"
        style={{ textDecoration: "none" }}
      >
        {i}
      </a>
    );
  }
  let contentArray = [];
  for (const i in data) {
    contentArray.push(
      <div className="Lecture-content-box">
        <div className="screen"></div>
        <h3 className="Lecture-box-heading">{i}</h3>
        <div className="Lecture-box-content-small">
          <div className="float-left">Module - 10</div>
          <div className="float-right">Time - 2hrs</div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="course-bar" ref={courseCarousel}>
        <button
          className="btn-left-course course-Carousel-btn"
          onClick={() => handleScroll("left")}
        >
          &lt;
        </button>
        {rows}
        <button
          className="btn-right-course course-Carousel-btn"
          onClick={() => handleScroll("right")}
        >
          &gt;
        </button>
      </div>

      <div className="lecture-main-content">{contentArray}</div>
    </>
  );
}
