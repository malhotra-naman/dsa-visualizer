import React, { useState, useEffect } from "react";
import ArrayBar from "./ArrayBar";
import {
  mergeSort,
  heapSort,
  quickSort,
  bubbleSort,
} from "../../algorithms/SortingAlgorithms";
import "./SortingVisualizer.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Controls from "./Controls";

const ANIMATION_SPEED_MS = 5;

const NUMBER_OF_ARRAY_BARS = 150;

const PRIMARY_COLOR = "turquoise";

const SECONDARY_COLOR = "red";

export default function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(100);

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < arraySize; i++) {
      arr.push(randomInt(5, 750));
    }
    setArray([...arr]);
  };

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // const generateSIA = () => {
  //   const arr = [];
  //   for (let i = 1; i < NUMBER_OF_ARRAY_BARS; i++) {
  //     arr.push(i);
  //   }
  //   setArray([...arr]);
  // };

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

  // const quickSortVisualize = () => {
  //   const animations = quickSort(array);
  //   console.log(animations);
  //   for (let i = 0; i < animations.length; i++) {
  //     const arrayBars = document.querySelectorAll(".ArrayBar-container");
  //     const { pivot, elements } = animations[i];
  //     for (let element of elements) {
  //       setTimeout(() => {
  //         const [barOneIdx, barTwoIdx] = element;
  //         const barOneStyle = arrayBars[barOneIdx].style;
  //         const barTwoStyle = arrayBars[barTwoIdx].style;
  //         barOneStyle.backgroundColor = SECONDARY_COLOR;
  //         barTwoStyle.backgroundColor = SECONDARY_COLOR;
  //         let temp = barOneStyle.height;
  //         barOneStyle.height = barTwoStyle.height;
  //         barTwoStyle.height = temp;
  //       }, i * ANIMATION_SPEED_MS);
  //     }
  //   }
  // };

  return (
    <>
      <Header isHome={false} />
      <Controls
        arraySize={arraySize}
        setArraySize={setArraySize}
        resetArray={resetArray}
        mergeSortVisualize={mergeSortVisualize}
      />
      <div className="SV-container">
        <div className="SV-array">
          {array.map((value, idx) => (
            <ArrayBar key={idx} value={value} />
          ))}
        </div>
        {/* <div className="SV-actions">
          <button onClick={resetArray}>Reset Array</button>
          <button onClick={mergeSortVisualize}>Merge Sort</button>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
