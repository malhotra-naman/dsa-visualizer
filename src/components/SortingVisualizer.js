import React, { useState, useEffect } from "react";
import ArrayBar from "./ArrayBar";
import {
  mergeSort,
  heapSort,
  quickSort,
  bubbleSort,
} from "../algorithms/SortingAlgorithms";
import "./SortingVisualizer.css";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 250;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

export default function SortingVisualizer() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      arr.push(randomInt(5, 750));
    }
    setArray([...arr]);
  };

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateSIA = () => {
    const arr = [];
    for (let i = 1; i < NUMBER_OF_ARRAY_BARS; i++) {
      arr.push(i);
    }
    setArray([...arr]);
  };

  const mergeSortVisualize = () => {
    const animations = mergeSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.querySelectorAll(".ArrayBar-container");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  return (
    <div className="SV-container">
      <div className="SV-array">
        {array.map((value, idx) => (
          <ArrayBar key={idx} value={value} />
        ))}
      </div>
      <div style={{ width: "300px" }} />
      <div className="SV-actions">
        <button onClick={resetArray}>Reset Array</button>
        <button onClick={mergeSortVisualize}>Merge Sort</button>
        <button onClick={quickSort}>Quick Sort</button>
        <button onClick={heapSort}>Heap Sort</button>
        <button onClick={bubbleSort}>Bubble Sort</button>
        <button onClick={generateSIA}>Strictly Increasing Array</button>
      </div>
    </div>
  );
}
